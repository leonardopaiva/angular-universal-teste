import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HighlightTitleComponent } from './components/highlight-title/highlight-title.component';

@NgModule({
  declarations: [
    CarouselComponent,
    HighlightTitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    CarouselComponent,
    HighlightTitleComponent
  ],
  entryComponents: [
  ]
})

export class SharedModule {}
