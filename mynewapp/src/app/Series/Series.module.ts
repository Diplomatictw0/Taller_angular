import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './Series.component';
import { SerieListComponent } from './Serie-list/Serie-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesComponent, SerieListComponent],
  exports: [SeriesComponent, SerieListComponent]
})
export class SeriesModule { }
