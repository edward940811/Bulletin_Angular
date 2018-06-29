import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from './bulletine/TodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: any;
  TodoList: TodoItem[];
  geturl: string = 'http://localhost:52665/api/bulletine';

  addTodo($event) {
    // should call api
    this.items.push($event);
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
        Top: 1,
        Type: 2,
        Name: 'hello',
        Date: 1223
      },
      {
        Top: 1,
        Type: 2,
        Name: 'hello',
        Date: 1223
      }
    ];
  }
  constructor(private  http: HttpClient) {}
}
