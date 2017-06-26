import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Companies } from './companies.component';
import { technology } from './technology.component';
const routes: Routes = [
  { path: '', component: Companies }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);