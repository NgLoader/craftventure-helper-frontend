import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../../api/api.service";
import { ContentService, ICategory, IElement, Response, SearchElementOptions, SearchGlobalOptions } from "../content.service";

export interface ItemCategory extends ICategory {
	name: string,
	image: string,
	keywords: string[]
}

export interface Item extends IElement {
	name: string,
	image: string,
	keywords: string[],
	checklist?: string[],
	description?: string,
	video?: string
}

@Injectable({
	providedIn: 'root'
})
export abstract class ItemService extends ContentService<ItemCategory, Item> {

	public static readonly ROUTE_ELEMENT = "content";
	public static readonly ROUTE_CATEGORY = "content/category";

	_getIdForPath(path: string[]): Observable<Response> {
		return this.httpClient.post<Response>(`${ApiService.DOMAIN}/${ItemService.ROUTE_ELEMENT}/path`, { path });
	}

	_getSearch(search: SearchGlobalOptions): Observable<Response> {
		return this.httpClient.post<Response>(`${ApiService.DOMAIN}/${ItemService.ROUTE_ELEMENT}/search`, { search });
	}

	_getCategorys(options: SearchElementOptions): Observable<Response> {
		return this.httpClient.post<Response>(`${ApiService.DOMAIN}/${ItemService.ROUTE_CATEGORY}`, options);
	}

	_getElements(options: SearchElementOptions): Observable<Response> {
		return this.httpClient.post<Response>(`${ApiService.DOMAIN}/${ItemService.ROUTE_ELEMENT}`, options);
	}

	_createCategory(parentId: string, category: ItemCategory): Observable<Response> {
		return this.httpClient.post<Response>(`${ApiService.DOMAIN}/${ItemService.ROUTE_CATEGORY}/create`, { ...category, _parentId: parentId } );
	}

	_createElement(categoryId: string, element: Item): Observable<Response> {
		return this.httpClient.post<Response>(`${ApiService.DOMAIN}/${ItemService.ROUTE_ELEMENT}/create`, { ...element, _categoryId: categoryId } );
	}

	_updateCategory(categoryId: string, category: ItemCategory): Observable<Response> {
		return this.httpClient.post<Response>(`${ApiService.DOMAIN}/${ItemService.ROUTE_CATEGORY}/update`, { ...category, _id: categoryId });
	}

	_updateElement(elementId: string, element: Item): Observable<Response> {
		return this.httpClient.post<Response>(`${ApiService.DOMAIN}/${ItemService.ROUTE_ELEMENT}/update`, {  ...element, _id: elementId });
	}

	_deleteCategory(categoryId: string): Observable<Response> {
		return this.httpClient.post<Response>(`${ApiService.DOMAIN}/${ItemService.ROUTE_CATEGORY}/delete`, { _id: categoryId });
	}

	_deleteElement(elementId: string): Observable<Response> {
		return this.httpClient.post<Response>(`${ApiService.DOMAIN}/${ItemService.ROUTE_ELEMENT}/delete`, { _id: elementId });
	}
}