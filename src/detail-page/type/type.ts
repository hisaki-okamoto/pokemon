import { Component, Input, Output } from "@angular/core";

Component({
  selector: "type",
  imports: [],
  templateUrl: "./type.html",
  styleUrl: "./type.css",
});
export class type {
  @Input() type: string = "";
}
