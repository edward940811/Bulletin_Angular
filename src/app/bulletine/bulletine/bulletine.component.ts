import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/components/common/selectitem';
import { TodoItem } from '../TodoItem';

interface Date {
  month: string;
  date: string;
}

@Component({
  selector: 'app-bulletine',
  templateUrl: './bulletine.component.html',
  styleUrls: ['./bulletine.component.scss']
})
export class BulletineComponent implements OnInit {
  columns: string[];
  selectedperYear: Date = { month: '', date: '' };
  selectedperMonth: number;
  selectedperWeekday: number;
  todoitem: TodoItem;
  months: SelectItem[] = [{ label: '請選擇', value: null }];
  Weekdays: SelectItem[] = [{ label: '請選擇', value: null }];
  Dates: SelectItem[] = [{ label: '請選擇', value: null }];

  // dialog new Todo Property
  showTodoModal = false;
  // dialog Edit Property
  showEditModal = false;
  // dialog notify Property
  showNotifyModal = false;
  setExpand = false;
  notifyGroupSelectedValue: string[];
  @Input() items: any;
  @Input() TodoList: TodoItem[];
  @Output() addTodo = new EventEmitter();
  @Output() savingNotify = new EventEmitter();
  showTodo() {
    this.showTodoModal = true;
  }

  showEdit() {
    this.showEditModal = true;
  }

  showNotification() {
    this.showNotifyModal = true;
  }

  // TodoList Post Request
  addTodoItem() {
    this.todoitem.Date = new Date();
    this.addTodo.emit(this.todoitem);
  }
  saveNotify() {
    if (
      !moment(
        '2020-' + this.selectedperYear.month + '-' + this.selectedperYear.date
      ).isValid()
    ) {
      const error = 'Please Enter a valid date';
      return;
    }
    // TODO: should have parameters ouptut
    this.savingNotify.emit();
  }

  ngOnInit() {
    for (let i = 1; i <= 7; i++) {
      this.Weekdays.push({ label: i.toString(), value: i });
    }
    for (let i = 1; i <= 12; i++) {
      const val = i < 10 ? '0' + i.toString() : i.toString();
      this.months.push({ label: i.toString(), value: val });
    }
    for (let i = 1; i <= 31; i++) {
      const val = i < 10 ? '0' + i.toString() : i.toString();
      this.Dates.push({ label: i.toString(), value: val });
    }

    this.columns = [
      'Top',
      'Type',
      'Name',
      'Date',
      'Edit'
    ];

    this.todoitem = {
      Top: false,
      Type: '',
      Name: '',
      Date: new Date(),
      RelatedUrl: '',
      Description: ''
    };
  }

  constructor() {}
}
