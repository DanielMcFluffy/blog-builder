import { Routes } from '@angular/router';
import { MainComponent } from './pages/builder/main/main.component';

export const builderRoutes: Routes = [
  {
    path: '',
    title: 'Builder page',
    component: MainComponent,
  },
]