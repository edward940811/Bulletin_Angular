import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { BulletineComponent } from './bulletine/bulletine.component';
import { MailFormComponent } from './mail-form/mail-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    DropdownModule,
    CommonModule,
    PanelModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    FormsModule,
    RadioButtonModule,
    CalendarModule,
    FileUploadModule,
    ReactiveFormsModule
  ],
  declarations: [BulletineComponent, MailFormComponent ],
  exports: [ BulletineComponent ]
})
export class BulletineModule { }
