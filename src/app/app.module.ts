import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GuideBuilderComponent } from './guide-builder/guide-builder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { GuideVisualizerComponent } from './guide-visualizer/guide-visualizer.component';

@NgModule({
  declarations: [
    AppComponent,
    GuideBuilderComponent,
    NavbarComponent,
    GuideVisualizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
