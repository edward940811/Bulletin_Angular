import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {SelectItem} from 'primeng/api';
import {Subjects} from '../../Subjects'

interface Date{
  month: string;
  date: string;
}

@Component({
  selector: 'app-bulletine',
  templateUrl: './bulletine.component.html',
  styleUrls: ['./bulletine.component.scss']
})

export class BulletineComponent implements OnInit {

  subjects : any;
  cols: any[];
  selectedperYear: Date = {month : "" , date : ""};

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
      if(i<10)
      var k = "0" + i;
      this.Months.push({label: i,value: k})
    }
    for(var i=1;i<=31;i++ ){
      if(i<10)
      var k = "0" + i;
      this.Dates.push({label: i,value: k})
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
  Notify = true;
  
  selectedCategories: string[] = ['Notify'];
  showNotification() {
    this.NotifyDisplay = true;
  }

  //Post Request
  DateErrorMessage : string;
  Post()  {
    if(!moment("2020-"+this.selectedperYear.month +"-"+ this.selectedperYear.date).isValid()){
      this.DateErrorMessage = "Please Enter a valid date";
        }

  }

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