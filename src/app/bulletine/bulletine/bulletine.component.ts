import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/components/common/selectitem';
import { TodoItem } from '../TodoItem';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selectedTodoItem: TodoItem = new TodoItem();
  // 改為reactive form之後就用不到，要把它抽掉
  edittodoitem: TodoItem = new TodoItem();
  //
  Months: SelectItem[] = [{ label: '請選擇', value: null }];
  Weekdays: SelectItem[] = [{ label: '請選擇', value: null }];
  Dates: SelectItem[] = [{ label: '請選擇', value: null }];
  // form
  editForm: FormGroup;
  // editForm: FormGroup;
  // 表頭名稱
  columns = ['置頂', '類型', '名稱', '建立時間', '操作'];
  // 新增待辦事項
  showTodoModal = false;
  // 編輯事項
  showEditModal = false;
  // 提醒
  showNotifyModal = false;
  // 是否信件通知，預設為否
  showMailForm = false;
  notifyGroupSelectedValue: boolean;
  // temp
  temp: any;
  // temp end
  @Input() TodoList: TodoItem[];
  @Output() addTodo = new EventEmitter();
  @Output() saveNotify = new EventEmitter();
  @Output() updatedTodoItem = new EventEmitter();
  @Output() deleteTodoItem = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.temp = {
      name: ''
    };
    // 初始化表格
    this.initForm();
    this.processTime();
  }
  // 初始化表格
  initForm() {
    // 這個名字不好要修改，總而言之就是todolist的項目，需要好好想個名字
    // 待辦事項表格
    this.editForm = this.formBuilder.group({
      id: [],
      setTop: ['false'],
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      date: [new Date()],
      description: [''],
      notify: [false],
      url: [[]],
      enableNotify: ['false'],
      enableMailNotify: ['false'],
      notifyType: [{value: '', disabled: true}],
      oneTimeDate: [{value: new Date(), disabled: true}],
      circleType: [{value: '', disabled: true}],
      yearMonth: [{value: null, disabled: true}],
      yearDate: [{value: null, disabled: true}],
      monthDate: [{value: null, disabled: true}],
      weekday: [{value: null, disabled: true}],
      receiver: [''],
      subject: [''],
      content: ['']
    });
  }
  // 初始化、處理時間
  processTime() {
    for (let i = 1; i <= 7; i++) {

      this.Weekdays.push({ label: this.transformNumberToCharacter(i), value: i });
    }
    for (let i = 1; i <= 12; i++) {
      const val = i < 10 ? '0' + i.toString() : i.toString();
      this.Months.push({ label: i.toString(), value: val });
    }
    for (let i = 1; i <= 31; i++) {
      const val = i < 10 ? '0' + i.toString() : i.toString();
      this.Dates.push({ label: i.toString(), value: val });
    }
  }
  showTodo() {
    this.editForm.reset();
    this.showTodoModal = true;
  }

  showEdit(model) {
    this.editForm.reset(model);
    this.showEditModal = true;
    this.temp = model;

  }

  showNotification(model) {
    this.editForm.reset(model);
    this.showNotifyModal = true;
    console.log('showNotification:');
    console.log(this.editForm.value);
  }

  // TodoList Post Request
  addTodoItem() {
    const today = new Date();
    this.editForm.patchValue({
      setTop: this.editForm.value.top === null ? false : true,
      date: today,
      id: 0,
      notify: false
    });
    this.addTodo.emit(this.editForm.value);
    this.showTodoModal = false;
  }
  saveNotifyModal() {
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
    console.log(this.editForm.value);
    this.editForm.patchValue({
      top: this.editForm.value.top === null ? false : true,
      date: this.editForm.value.date,
      id: this.editForm.value.id,
      notify: this.editForm.value.notify
    });
    this.saveNotify.emit(this.editForm.value);
    this.showNotifyModal = false;
  }
  update() {
    console.log('prepare to update');
    console.log('do something');
  }
  delete() {
   console.log(this.temp);
    // this.temp
    // this.selectedTodoItem = model;
    this.deleteTodoItem.emit(this.temp);
  }
  // 將數字轉為國字
  transformNumberToCharacter(number) {
    switch (number) {
      case 1:
        return '一';
      case 2:
        return '二';
      case 3:
        return '三';
      case 4:
        return '四';
      case 5:
        return '五';
      case 6:
        return '六';
      case 7:
        return '日';
    }
  }
  controlNotifyEnableStatus(status) {
    if (status) {
      this.editForm.controls['notifyType'].enable();
      this.editForm.patchValue({
        notify: true
      });
    }else {
      // this.editForm.controls['notifyType'].disable();
      // this.controlCircleStatus('default');
      this.editForm.controls['notifyType'].disable();
      this.editForm.controls['circleType'].disable();
      this.controlCircleStatus('default');
      this.editForm.patchValue({
        notify: false
      });
    }
  }
  contorlNotifyTypeStatus(status) {
    // true:一次性提醒,false:週期性提醒
    if (status) {
      this.editForm.controls['oneTimeDate'].enable();
      this.editForm.controls['circleType'].disable();
    }else {
      this.editForm.controls['oneTimeDate'].disable();
      this.editForm.controls['circleType'].enable();
    }
  }
  controlCircleStatus(status) {
    switch (status) {
      case 'year':
      this.editForm.controls['yearMonth'].enable();
      this.editForm.controls['yearDate'].enable();
      this.editForm.controls['monthDate'].disable();
      this.editForm.controls['weekday'].disable();
      break;
      case 'month':
      this.editForm.controls['yearMonth'].disable();
      this.editForm.controls['yearDate'].disable();
      this.editForm.controls['monthDate'].enable();
      this.editForm.controls['weekday'].disable();
      break;
      case 'weekday':
      this.editForm.controls['yearMonth'].disable();
      this.editForm.controls['yearDate'].disable();
      this.editForm.controls['monthDate'].disable();
      this.editForm.controls['weekday'].enable();
      break;
      case 'default':
      this.editForm.controls['yearMonth'].disable();
      this.editForm.controls['yearDate'].disable();
      this.editForm.controls['monthDate'].disable();
      this.editForm.controls['weekday'].disable();
    }
  }
}
