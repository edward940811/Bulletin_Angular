import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpModule } from '@angular/http';
import { BulletineModule} from './bulletine/bulletine.module';
import { TableDialogComponent } from './table-dialog/table-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDialogComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FileUploadModule,
    BulletineModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
