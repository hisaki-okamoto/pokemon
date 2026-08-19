import { Component, Input, Output } from "@angular/core";
import { typeColor } from "../../app/utils/typeColor";

@Component({
  selector: "type",
  imports: [],
  standalone: true,
  templateUrl: "./type.html",
  styleUrl: "./type.css",
})
export class type {
  @Input() types: string[] = [];
  color: string[] = [];

  colorSet() {
    for (let i = 0; i < this.types.length; i++) {
      this.color.push("color:" + typeColor(this.types[i]));
    }
  }
}
