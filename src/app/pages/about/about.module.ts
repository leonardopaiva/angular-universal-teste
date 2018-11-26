import { AboutRoutingModule } from './about-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutRoutingModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [
  ]
})

export class AboutModule {}
