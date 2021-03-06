import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoItem } from './bulletine/TodoItem';
import { RequestOptions } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: any;
  TodoList: TodoItem[];
  TodoItem: TodoItem;
  apiUrl: string= 'https://eshclouds-api-center-developer.azurewebsites.net/api/Bulletine';
  // localApiUrl: string = 'http://localhost:52665/api/bscvbnm,.ulletine';

  ngOnInit() {
    this.getAllTodo();
  }
  constructor(private  http: HttpClient) {}

  deleteTodoItem(event) {
    console.log(event);
    this.TodoItem = event;
    this.http.delete(this.apiUrl + '/' + event.id)
    .subscribe(res => {
      this.getAllTodo();
    });
  }
  saveNotify(event) {
    this.http.put(this.apiUrl, event, {responseType: 'text'})
    .subscribe(res => {
      this.getAllTodo();
    });
  }
  updateTodoItem(event) {
    this.http.put(this.apiUrl, event, {responseType: 'text'})
    .subscribe(res => {
      this.getAllTodo();
    });
  }
  addTodo(event) {
    // should call api
    console.log(event);
    this.items = event;
    this.http.post(this.apiUrl, event, {responseType: 'text'})
      .subscribe(res => {
        this.getAllTodo();
      });
  }
  getAllTodo() {
      this.http.get<TodoItem[]>(this.apiUrl)
      .subscribe(
        response => {
          this.TodoList = response;
          console.log(this.TodoList);
          this.TodoList.push(
            {
              id: 1,
              setTop: true,
              type: '審核',
              name: '阿尼',
              date: new Date(2017, 12, 23),
              notify: true
            },
            {
              id: 2,
              setTop: false,
              type: '審核',
              name: '哆啦A夢',
              date: new Date(2018, 11, 11),
              notify: true
            }
          );
          console.log(this.TodoList);
        }
      );
  }
}
