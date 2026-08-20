import { Component, Input } from "@angular/core";
import { typeColor } from "../../app/utils/typeColor";

@Component({
  selector: "type",
  imports: [],
  standalone: true,
  templateUrl: "./type.html",
  styleUrl: "./type.css",
})
export class type {
  @Input() dataType: string[] = [];
  getType: string[] = [];
  color: string[] = [];

  keepType: string[] = [];

  colorSet() {
    this.getType.length = 0;
    this.getType = [...this.dataType];
    if (this.getType.length === 0) {
      this.getType = this.keepType;
    }
    this.keepType.length = 0;
    this.keepType = this.getType;
    for (let i = 0; i < this.getType.length; i++) {
      this.color[i] = `background-color:${typeColor(this.dataType[i])}`;
    }
    this.dataType.length = 0;
  }
  ngOnChanges() {
    this.colorSet();
  }
}
