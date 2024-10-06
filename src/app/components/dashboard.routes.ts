import { Routes } from '@angular/router';


export const dashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        children: [
            {
                path: 'invoice-query',
                loadComponent: () => import('./invoicequery/invoicequery.component').then(m => m.InvoicequeryComponent)
            },
            {
                path: 'profile-query',
                loadComponent: () => import('./profilequery/profilequery.component').then(m => m.ProfilequeryComponent)
            }
        ]
    }
]