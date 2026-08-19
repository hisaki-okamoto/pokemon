import { Component, Input, type SimpleChange } from "@angular/core";
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
  ice = "こおり";
  stil = "はがね";
  a = "";
  b = "";

  colorSet() {
    this.types = [...this.types];
    for (let i = 0; i < this.types.length; i++) {
      this.color[i] = "background-color:" + typeColor(this.types[i]);
    }
  }
  ngOnChanges(types: SimpleChange) {
    this.colorSet();
  }
}
