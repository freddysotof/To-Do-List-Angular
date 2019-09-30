import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule, MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
