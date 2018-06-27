import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletineComponent } from './bulletine.component';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule }    from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {MailFormComponent} from '../mail-form/mail-form.component';
import {FileUploadModule} from 'primeng/fileupload';


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
    FileUploadModule
  ],
  declarations: [BulletineComponent,MailFormComponent ],
  exports: [ BulletineComponent ]
})
export class BulletineModule { }
