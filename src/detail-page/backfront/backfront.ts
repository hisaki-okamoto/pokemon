import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "backfront",
  standalone: true,
  imports: [],
  templateUrl: "./backfront.html",
  styleUrl: "./backfront.css",
})
export class backfront {
  @Input() id: number = 0;
}
