type Data = {
  H: number;
  A: number;
  B: number;
  C: number;
  D: number;
  S: number;
};

import { Component, Input } from "@angular/core";

@Component({
  selector: "stats",
  imports: [],
  standalone: true,
  templateUrl: "./stats.html",
  styleUrl: "./stats.css",
})
export class stats {
  @Input() pokemonData: Data = { H: 0, A: 0, B: 0, C: 0, D: 0, S: 0 };
  type: string[] = ["HP", "攻撃", "防御", "特攻", "特防", "すばやさ"];
  stats: number[] = [];

  getStats() {
    this.stats = Object.values(this.pokemonData);
  }

  constructor() {
    console.log("ssssssssssss");
  }

  ngOnChanges() {
    console.log(this.pokemonData);
    this.getStats();
  }
}
