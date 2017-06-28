<<<<<<< HEAD
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { technology } from './technology.component';

const routes: Routes = [
  { path: '', component: technology }
];

=======
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { technology } from './technology.component';

const routes: Routes = [
  { path: '', component: technology }
];

>>>>>>> fcd28ffae3e4e3f06b6691ff9f0f05e195690282
export const routing: ModuleWithProviders = RouterModule.forChild(routes);