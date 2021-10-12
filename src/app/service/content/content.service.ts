import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, zip } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface IElement {
	_id?: string;
	_categoryId?: string;
	enabled?: boolean;
}

export interface ICategory {
	_id?: string;
	_parentId?: string;
	enabled?: boolean;
}

export interface IContent<Cateogry extends ICategory, Element extends IElement> {
	categorys: Cateogry[];
	elements: Element[];
}

interface SearchOptions {
	_id?: string;
}

export interface SearchCategoryOptions extends SearchOptions {
	_parentId?: string;
}

export interface SearchElementOptions extends SearchOptions {
	_categoryId?: string;
}

interface StoreValue<T> {
	[value: string]: {
		behaviorSubject: BehaviorSubject<T>,
		$observable: Observable<T>
	}
}

export interface Response {
	success: boolean;
	errors: { msg: string }[];

	content: any;
}

@Injectable({
	providedIn: 'root'
})
export abstract class ContentService<Category extends ICategory, Element extends IElement> {

	private categorys: StoreValue<Category> = {};
	private elements: StoreValue<Element> = {};

	private pathIds: StoreValue<{ id: string, element: Element }> = {};
	private contents: StoreValue<IContent<Category, Element>> = {};

	constructor(
		protected readonly httpClient: HttpClient
	) { }

	abstract _getIdForPath(path: string[]): Observable<Response>;
	getIdForPath(path: string[]): Observable<{ id: string, element: Element }> {
		const pathAsString = path.join('/');
		let stored = this.pathIds[pathAsString];
		if (!stored) {
			stored = this.updateStoreValue(this.pathIds, pathAsString, undefined);

			this._getIdForPath(path).pipe(
				map(result => {
					if (result) {
						if (!result.success) {
							throwError(result.errors ? JSON.stringify(result.errors) : 'Unknown error!');
						}
	
						return result.content && result.content.ids ? result : undefined;
					}
				}),
				tap(result => {
					if (result && result.content.ids.length <= path.length) {
						const ids: string[] = result.content.ids;
						const element: Element = result.content.element;
						if (element) {
							this.updateStoreValue(this.elements, element._id, element, true);
						}

						const currentPath: string[] = [];
						for (let index = 0; index < path.length; index++) {
							currentPath.push(path[index]);
							this.updateStoreValue(this.pathIds, currentPath.join('/'), {
								id: ids[index],
								element: (index == (path.length - 1) && element ? element : undefined)
							}, true);
						}
					}
				})).subscribe();
		}
		return stored.$observable;
	}

	getContent(_id: string, useCache: boolean = true): Observable<IContent<Category, Element>> {
		let stored = this.contents[_id];
		if (!stored) {
			stored = this.updateStoreValue(this.contents, _id, undefined, true);
			useCache = false;
		}

		if (!useCache) {
			zip(this.getCategorys({ _id }), this.getElements({ _id }))
				.pipe(
					tap(result => {
						if (result && result.length > 1 && (result[0] || result[1])) {
							stored.behaviorSubject.next({
								categorys: result[0],
								elements: result[1]
							});
						}
					})
				)
				.subscribe();
		}
		return stored.$observable;
	}

	abstract _getCategorys(options: SearchCategoryOptions): Observable<Response>;
	getCategorys(options: SearchCategoryOptions): Observable<Category[]> {
		return this._getCategorys(options).pipe(
			map(result => {
				if (result) {
					if (!result.success) {
						throwError(result.errors ? JSON.stringify(result.errors) : 'Unknown error!');
					}

					return result.content instanceof Array ? result.content as Category[] : undefined;
				}
			}),
			tap(result => {
				if (result) {
					for (const content of result) {
						this.updateStoreValue(this.categorys, content._id, content);
					}
				}
			})
		);
	}

	abstract _getElements(options: SearchElementOptions): Observable<Response>;
	getElements(options: SearchElementOptions): Observable<Element[]> {
		return this._getElements(options).pipe(
			map(result => {
				if (result) {
					if (!result.success) {
						throwError(result.errors ? JSON.stringify(result.errors) : 'Unknown error!');
					}

					return result.content instanceof Array ? result.content as Element[] : undefined;
				}
			}),
			tap(result => {
				if (result) {
					for (const content of result) {
						this.updateStoreValue(this.elements, content._id, content);
					}
				}
			})
		);
	}

	abstract _createCategory(parentId: string, category: Category): Observable<Response>;
	createCategory(parentId: string, category: Category): Observable<Category> {
		return this._createCategory(parentId, category).pipe(
			map(result => {
				if (result) {
					if (!result.success) {
						throwError(result.errors ? JSON.stringify(result.errors) : 'Unknown error!');
					}

					return result.content;
				}
			}),
			tap(result => {
				if (result) {
					this.updateStoreValue(this.categorys, result._id, result);

					if (result._parentId) {
						this.getContent(result._parentId, false).subscribe();
					}
				}
			})
		);
	}

	abstract _createElement(categoryId: string, element: Element): Observable<Response>;
	createElement(categoryId: string, element: Element) {
		return this._createElement(categoryId, element).pipe(
			map(result => {
				if (result) {
					if (!result.success) {
						throwError(result.errors ? JSON.stringify(result.errors) : 'Unknown error!');
					}

					return result.content;
				}
			}),
			tap(result => {
				if (result) {
					this.updateStoreValue(this.elements, result._id, result);
					this.getContent(result._categoryId, false).subscribe();
				}
			})
		);
	}

	abstract _updateCategory(categoryId: string, category: Category): Observable<Response>;
	updateCategory(categoryId: string, category: Category) {
		return this._updateCategory(categoryId, category).pipe(
			map(result => {
				if (result) {
					if (!result.success) {
						throwError(result.errors ? JSON.stringify(result.errors) : 'Unknown error!');
					}

					return result.content;
				}
			}),
			tap(result => {
				if (result) {
					this.updateStoreValue(this.categorys, result._id, result);
					if (result._parentId) {
						this.getContent(result._parentId, false).subscribe();
					}
				}
			})
		);
	}

	abstract _updateElement(elementId: string, element: Element): Observable<Response>;
	updateElement(elementId: string, element: Element) {
		return this._updateElement(elementId, element).pipe(
			map(result => {
				if (result) {
					if (!result.success) {
						throwError(result.errors ? JSON.stringify(result.errors) : 'Unknown error!');
					}

					return result.content;
				}
			}),
			tap(result => {
				if (result) {
					this.updateStoreValue(this.elements, result._id, result);
					this.getContent(result._categoryId, false).subscribe();
				}
			})
		);
	}

	abstract _deleteCategory(categoryId: string): Observable<Response>;
	deleteCategory(categoryId: string) {
		return this._deleteCategory(categoryId).pipe(
			map(result => {
				if (result) {
					if (!result.success) {
						throwError(result.errors ? JSON.stringify(result.errors) : 'Unknown error!');
					}

					return result.content;
				}
			}),
			tap(result => {
				if (result) {
					this.updateStoreValue(this.categorys, result._id, undefined);

					if (result._parentId) {
						this.getContent(result._parentId, false).subscribe();
					}
				}
			})
		);
	}

	abstract _deleteElement(elementId: string): Observable<Response>;
	deleteElement(elementId: string) {
		return this._deleteElement(elementId).pipe(
			map(result => {
				if (result) {
					if (!result.success) {
						throwError(result.errors ? JSON.stringify(result.errors) : 'Unknown error!');
					}

					return result.content;
				}
			}),
			tap(result => {
				if (result) {
					this.updateStoreValue(this.elements, result._id, undefined);
					this.getContent(result._categoryId, false).subscribe();
				}
			})
		);
	}

	private updateStoreValue<T>(collection: StoreValue<T>, key: string, value: T, skipUndefined: boolean = false) {
		let storedValue = key ? collection[key] : undefined;
		if (storedValue) {
			if (skipUndefined && !value) {
				return storedValue;
			}

			storedValue.behaviorSubject.next(value);
		} else {
			const behaviorSubject = new BehaviorSubject<T>(value);
			storedValue = {
				behaviorSubject: behaviorSubject,
				$observable: behaviorSubject.asObservable()
			}

			collection[key] = storedValue;
		}
		return storedValue;
	}
}