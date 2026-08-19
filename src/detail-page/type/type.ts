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
  getType: string[] = [];
  color: string[] = [];

  colorSet() {
    this.getType.length = 0;
    this.getType = [...this.types];
    for (let i = 0; i < this.getType.length; i++) {
      this.color[i] = "background-color:" + typeColor(this.types[i]);
    }
    this.types.length = 0;
  }
  ngOnChanges(types: SimpleChange) {
    this.colorSet();
  }
}
