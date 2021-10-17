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
    loadChildren: () => import('./view/view.module').then(child => child.ViewModule)
  },
  {
    path: '**',
    loadChildren: () => import('./list/list.module').then(child => child.ListModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContentRoutingModule { }
