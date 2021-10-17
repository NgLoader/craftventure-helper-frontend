import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './shell/layout/layout.component';
import { AuthGuard } from './service/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'c',
                pathMatch: 'full'
                //loadChildren: () => import('./dashboard/dashboard.module').then(child => child.DashboardModule)
            },
            {
                path: 'c',
                loadChildren: () => import('./content/content-routing.module').then(child => child.ContentRoutingModule)
            },
            {
                path: 'admin',
                //canActivate: [AuthGuard],
                loadChildren: () => import('./admin/admin-routing.module').then(child => child.AdminRoutingModule)
            },
            {
                path: 'login',
                loadChildren: () => import('./login/login.module').then(child => child.LoginModule)
            },
        ]
    },
    {
        path: '**',
        component: LayoutComponent,
        loadChildren: () => import('./page-not-found/page-not-found.module').then(child => child.PageNotFoundModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
