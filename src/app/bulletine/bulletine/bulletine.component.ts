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
  selectedperYear: Date = { month: '', date: '' };
  selectedperMonth: number;
  selectedperWeekday: number;
  selectedTodoItem: TodoItem = new TodoItem;
  newtodoitem: TodoItem;
  edittodoitem: TodoItem = new TodoItem;
  months: SelectItem[] = [{ label: '請選擇', value: null }];
  Weekdays: SelectItem[] = [{ label: '請選擇', value: null }];
  Dates: SelectItem[] = [{ label: '請選擇', value: null }];
  // 表頭名稱
  columns = [
    '置頂',
    '類型',
    '名稱',
    '建立時間',
    '操作'
  ];
  // 新增待辦事項
  showTodoModal = false;
  // 編輯事項
  showEditModal = false;
  // 提醒
  showNotifyModal = false;
  // 是否信件通知，預設為否
  showMailForm= false;
  notifyGroupSelectedValue: boolean;
  @Input() items: any;
  @Input() TodoList: TodoItem[];
  @Output() addTodo = new EventEmitter();
  @Output() savingNotify = new EventEmitter();
  @Output() updatedTodoItem = new EventEmitter();
  @Output() deleteTodoItem = new EventEmitter();

  showTodo() {
    this.showTodoModal = true;
  }

  showEdit(model) {
    this.selectedTodoItem = model;
    this.showEditModal = true;
    console.log(this.selectedTodoItem);
  }

  showNotification(model) {
    this.selectedTodoItem = model;
    this.notifyGroupSelectedValue = model.notify.toString();
    this.showNotifyModal = true;
  }

  // TodoList Post Request
  addTodoItem() {
    this.newtodoitem.date = new Date();
    this.addTodo.emit(this.newtodoitem);
    this.showTodoModal = false;
  }
  saveNotifyModal() {
    console.log('save notify modal');
    // 先註解
    // if (
    //   !moment(
    //     '2020-' + this.selectedperYear.month + '-' + this.selectedperYear.date
    //   ).isValid()
    // ) {
    //   console.log('???');
    //   const error = 'Please Enter a valid date';
    //   return;
    // }
    // TODO: should have parameters ouptut
    this.savingNotify.emit();
    this.showNotifyModal = false;
  }
  update(model) {
    this.selectedTodoItem = model;
    this.selectedTodoItem.description = this.edittodoitem.description;
    this.selectedTodoItem.type = this.edittodoitem.type;
    this.updatedTodoItem.emit(this.selectedTodoItem);
    this.showEditModal = false;
  }
  delete(model) {
    this.selectedTodoItem = model;
    this.deleteTodoItem.emit(this.selectedTodoItem);
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

    // this.columns = [
    //   'Top',
    //   'Type',
    //   'Name',
    //   'Date',
    //   'Edit'
    // ];

    this.newtodoitem = {
      id: 0,
      isTop: false,
      type: '',
      name: '',
      date: new Date(),
      description: '',
      notify: false,
      url: []
    };
  }

  constructor() {}
}
