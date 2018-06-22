import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DemoComponent
  ],
  declarations: [DemoComponent]
})
export class DemoModule { }
