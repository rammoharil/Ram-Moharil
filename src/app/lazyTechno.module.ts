<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { technology }   from './technology.component';
import { routing } from './lazyTechno.routing';
import {TechnologiesPipe} from './TechnologyPipe';

@NgModule({
  imports: [routing,CommonModule],
  declarations: [technology,TechnologiesPipe]
})
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { technology }   from './technology.component';
import { routing } from './lazyTechno.routing';
import {TechnologiesPipe} from './TechnologyPipe';

@NgModule({
  imports: [routing,CommonModule],
  declarations: [technology,TechnologiesPipe]
})
>>>>>>> fcd28ffae3e4e3f06b6691ff9f0f05e195690282
export class LazyTechModule {}