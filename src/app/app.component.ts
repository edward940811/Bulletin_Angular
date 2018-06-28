import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: any;

  addTodo($event) {
    // should call api
    this.items.push($event);
  }

  ngOnInit() {
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
}
