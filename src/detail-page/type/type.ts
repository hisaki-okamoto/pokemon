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

  keepType: string[] = [];

  colorSet() {
    this.getType.length = 0;
    this.getType = [...this.types];
    if (this.getType.length === 0) {
      this.getType = this.keepType;
    }
    this.keepType.length = 0;
    this.keepType = this.getType;
    for (let i = 0; i < this.getType.length; i++) {
      this.color[i] = "background-color:" + typeColor(this.types[i]);
    }
    this.types.length = 0;
  }
  ngOnChanges(types: SimpleChange) {
    this.colorSet();
  }
}
