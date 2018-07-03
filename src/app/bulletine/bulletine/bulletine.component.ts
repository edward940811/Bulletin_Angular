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
  selectedTodoItem: TodoItem = new TodoItem();
  newtodoitem: TodoItem;
  edittodoitem: TodoItem = new TodoItem;
  months: SelectItem[] = [{ label: '請選擇', value: null }];
  Weekdays: SelectItem[] = [{ label: '請選擇', value: null }];
  Dates: SelectItem[] = [{ label: '請選擇', value: null }];


  showTodoModal = false;
  showEditModal = false;
  // dialog notify Property
  // showNotifyModal = false;
  // 先預設打開，好開發
  showNotifyModal = true;
  // showEditModal= true;
  // temp setting
  editTitle = '2018-Q2 法規鑑別';
  notifyTitle = '2018-Q2 法規鑑別';
  // temp setting end
  setExpand = false;
  notifyGroupSelectedValue: boolean;
  @Input() items: any;
  @Input() TodoList: TodoItem[];
  @Output() addTodo = new EventEmitter();
  @Output() savingNotify = new EventEmitter();
  @Output() updatedTodoItem = new EventEmitter();

  showTodo() {
    this.showTodoModal = true;
  }

  showEdit(model) {
    this.selectedTodoItem = model;
    console.log(this.selectedTodoItem);
    console.log(model);
    this.showEditModal = true;
  }

  showNotification(model) {
    this.selectedTodoItem = model;
    this.notifyGroupSelectedValue = model.top.toString();
    console.log(model.top);
    this.showNotifyModal = true;
  }
  saveEditModal() {
    console.log('儲存要做的事情!');
  }
  // TodoList Post Request

  saveNotifyModal() {
    console.log('儲存提醒的modal');
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
  update(model) {
    this.selectedTodoItem = model;
    this.selectedTodoItem.Description = this.edittodoitem.Description;
    this.selectedTodoItem.Type = this.edittodoitem.Type;
    this.updatedTodoItem.emit(this.selectedTodoItem);
    this.showEditModal = false;
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

    this.columns = ['Top', 'Type', 'Name', 'Date', 'Edit'];

    this.newtodoitem = {
      Id: 0,
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
