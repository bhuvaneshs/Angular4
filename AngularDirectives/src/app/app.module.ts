import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlighterDirective } from './highlighter.directive';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { HighlightcolorDirective } from './highlightcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirective,
    CustomdirectiveComponent,
    HighlightcolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
