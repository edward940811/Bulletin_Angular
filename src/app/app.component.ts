import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoItem } from './bulletine/TodoItem';
import { Options } from 'selenium-webdriver/edge';
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
  geturl: string = 'http://localhost:52665/api/bulletine';

  deleteTodoItem($event) {
    this.TodoItem = $event;
    console.log($event.id);
    this.http.delete(this.geturl + '/' + $event.id)
    .subscribe(res => {
      this.getAllTodo();
    });
  }
  updateTodoItem($event) {
    this.http.put(this.geturl, $event, {responseType: 'text'})
    .subscribe(res => {
      this.getAllTodo();
    });
  }
  addTodo($event) {
    // should call api
    this.items.push($event);
    console.log(this.items);
    this.http.post(this.geturl, $event, {responseType: 'text'})
      .subscribe(res => {
        this.getAllTodo();
      });
  }
  getAllTodo() {
      this.http.get<TodoItem[]>(this.geturl)
      .subscribe(
        response => {
          this.TodoList = response;
        }
      );
  }

  ngOnInit() {
    this.getAllTodo();
    this.items = [
      {
        top: true,
        type: 1,
        Name: 'hello',
        date: 1223
      },
      {
        top: false,
        type: 2,
        Name: 'hello',
        date: 1223
      }
    ];
  }
  constructor(private  http: HttpClient) {}
}
