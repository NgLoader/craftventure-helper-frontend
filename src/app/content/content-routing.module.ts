import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

export function isView(url: UrlSegment[]) {
  return url.length > 0 && url[url.length - 1].path.endsWith('view') ? ({consumed: url}) : null;
}

const routes: Routes = [
  {
    matcher: isView,
    component: ViewComponent
  },
  {
    path: '**',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContentRoutingModule { }
