import { Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/blog/home/home.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
        children: [
            {
                path: '',
                title: 'Blog Page',
                component: HomeComponent,
            },
            {
                path: 'blog',
                title: 'Blog detail',
                component: BlogDetailComponent,
                children: [
                    {
                        path: ':id',
                        title: 'id blog',
                        component: BlogDetailComponent,
                    }
                ]
            }
        ]
    },
    {
        path: 'builder',
        loadComponent: () => import('./pages/builder/builder.component').then(m => m.BuilderComponent),
        loadChildren: () => import ('./builder.routes').then(m => m.builderRoutes)
    },
    {
        path: 'builder/:id',
        title: 'Editing page',
        loadComponent: () => import('./pages/builder/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent),
    },
];
