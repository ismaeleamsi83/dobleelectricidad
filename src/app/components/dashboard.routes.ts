import { Routes } from '@angular/router';


export const dashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
    }
]