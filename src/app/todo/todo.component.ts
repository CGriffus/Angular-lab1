import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  toDoList: Todo[] = [
    { task: "clean room", completed: false },
    { task: "brush Bella", completed: true },
    { task: "pay vet bill", completed: false },
    { task: "turn in lab", completed: true },
    { task: "go to Discount Tire", completed: false }
  ];

  constructor() {}

  ngOnInit() {}
}
