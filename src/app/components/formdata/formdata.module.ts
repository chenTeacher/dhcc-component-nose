import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormdataRoutingModule } from './formdata-routing.module';
import { FormdataComponent } from './formdata.component';

@NgModule({
  declarations: [FormdataComponent],
  imports: [
    CommonModule,
    FormdataRoutingModule
  ]
})
export class FormdataModule { }
