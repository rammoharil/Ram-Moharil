import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { technology } from '../technology.component';

const routes: Routes = [
  { path: '', component: technology }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);