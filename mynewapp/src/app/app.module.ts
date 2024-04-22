import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SerieListComponent } from './Series/Serie-list/Serie-list.component';
import { AppComponent } from './app.component';
import { SeriesModule } from './Series/Series.module';

const routes: Routes = [
    { path: '', component: SerieListComponent }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SeriesModule
    ],
    bootstrap: [AppComponent] // Agrega AppComponent aquí
})
export class AppModule { }