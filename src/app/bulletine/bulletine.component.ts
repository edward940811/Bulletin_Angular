import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Subjects} from '../../Subjects'

@Component({
  selector: 'app-bulletine',
  templateUrl: './bulletine.component.html',
  styleUrls: ['./bulletine.component.scss']
})
export class BulletineComponent implements OnInit {

  subjects : any;
  cols: any[];

  //DatePicker
  Months: any[] = [{label: "請選擇", value : null}];
  Weekdays: any[] = [{label: "請選擇", value : null}];
  Dates : any[] = [{label: "請選擇", value : null}];

  constructor() {
    //dropBox Property
    for(var i=1;i<=7;i++ ){
      this.Weekdays.push({label: i,value: i})
    }
    for(var i=1;i<=12;i++ ){
      this.Months.push({label: i,value: i})
    }
    for(var i=1;i<=31;i++ ){
      this.Dates.push({label: i,value: i})
    }
  }

  //dialog Edit Property
  EditDisplay = false;
  showEdit() {
    this.EditDisplay = true;
  }

  //dialog notify Property
  notifyGroupSelectedValue: string[];
  NotifyDisplay = false;
  setExpand  = false;
  showNotification() {
    this.NotifyDisplay = true;
  }


  //checkbox property
  Notify = true;
  selectedCategories: string[] = ['Notify'];

  ngOnInit() {
  
      this.cols = [
          { field: 'Top', header: 'Top' },
          {field: 'Type', header: 'Type' },
          { field: 'Name', header: 'Name' },
          {field: 'Date', header: 'Date'},
          { field: 'Edit', header: 'Edit' }
      ];
      //data for testing
      this.subjects=[
        {
          Top :1,
          Type:2,
          Name: "hello",
          Date: 1223        
        },
        {
          Top :1,
          Type:2,
          Name: "hello",
          Date: 1223        
        }
      ]
      
  }

}