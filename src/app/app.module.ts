import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FileUploadModule } from 'primeng/fileupload';
import {BulletineModule} from './bulletine/bulletine.module';
import { TableDialogComponent } from './table-dialog/table-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TableDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FileUploadModule,
    BulletineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
