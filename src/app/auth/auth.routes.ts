import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

// aquí pongo las rutas a partir de las rutas padre del app.routes.ts 

export const authRoutes: Routes = [
    // 1. Si es vacio solo con la ruta del padre se redirecciona a la ruta padre + login
    // 2. Si es auth/login se carga el componente login
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    }
    
];