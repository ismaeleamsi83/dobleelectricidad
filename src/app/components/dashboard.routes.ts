import { Routes } from '@angular/router';

// Una vez que estas loagueado y te redirecciona aquí, cargo el componente dashboard
// 1. si esta vacio es decir solo con el padre que es dashboard, lo redirecciona a dashboard/invoice-query
// que carga el componente invoicequery. Es decir carga por defecto el componente invoicequery para que no este vacio
// 2. Si es invoice-query se carga el componente invoicequery
// 3. Si es profile-query se carga el componente profilequery
export const dashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        children: [
            {
                path: '',
                redirectTo: 'invoice-query',
                pathMatch: 'full'
            },
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