import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { technology }   from './technology.component';
import { routing } from './lazyTechno.routing';
import {TechnologiesPipe} from './TechnologyPipe';

@NgModule({
  imports: [routing,CommonModule],
  declarations: [technology,TechnologiesPipe]
})
export class LazyTechModule {}