<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Companies }   from './companies.component';
import { routing } from './lazy.routing';
import {CompanyPipe} from './CompaniesPipe';
@NgModule({
  imports: [routing,CommonModule],
  declarations: [Companies,CompanyPipe]
})
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Companies }   from './companies.component';
import { routing } from './lazy.routing';
import {CompanyPipe} from './CompaniesPipe';
@NgModule({
  imports: [routing,CommonModule],
  declarations: [Companies,CompanyPipe]
})
>>>>>>> fcd28ffae3e4e3f06b6691ff9f0f05e195690282
export class LazyModule {}