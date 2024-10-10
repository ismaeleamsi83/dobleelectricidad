import { Routes } from '@angular/router';

// Aquí controlo las rutas de la app

export const routes: Routes = [
    // 1. Si es la raiz lo redirecciono ha auth
    // 2. Si es auth le cargo el authRoutes  de forma lazyloading
    // 3. Si es dashboard le cardo el dashboardRoutes de forma lazyloading
    // 4. Toda ruta que no empiece como las anteriores lo redirecciona al auth
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboard.routes').then(m => m.dashboardRoutes)
    },
    {
        path: '**',
        redirectTo: '/auth',

    }
    
];
