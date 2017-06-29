import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Companies }   from '../companies.component';
import { routing } from './lazy.routing';
import {CompanyPipe} from '../filters/CompaniesPipe';
@NgModule({
  imports: [routing,CommonModule],
  declarations: [Companies,CompanyPipe]
})
export class LazyModule {}