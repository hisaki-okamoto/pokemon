/** biome-ignore-all lint/complexity/useLiteralKeys: <explanation> */
type Data = {
  H: number;
  A: number;
  B: number;
  C: number;
  D: number;
  S: number;
};

import { CommonModule } from "@angular/common";
import { Component, Input, type SimpleChanges } from "@angular/core";

@Component({
  selector: "stats",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./stats.html",
  styleUrl: "./stats.css",
})
export class Stats {
  @Input() pokemonData: Data = { H: 0, A: 0, B: 0, C: 0, D: 0, S: 0 };
  type: string[] = ["HP", "攻撃", "防御", "特攻", "特防", "すばやさ"];
  stats: number[] = [];
  max: number[] = [];
  nMax: number[] = [];
  normal: number[] = [];
  min: number[] = [];

  getStats() {
    this.stats = Object.values(this.pokemonData);
  }

  getMax() {
    let data: number[] = [];
    for (let i = 0; i < 6; i++) {
      if (i === 0) {
        data = [Number()];
        continue;
      }
      const calc = Math.floor((this.stats[i] + 52) * 1.1);
      data = [...data, calc];
    }
    this.max = data;
  }

  getnMax() {
    let data: number[] = [];
    for (let i = 0; i < 6; i++) {
      if (i === 0) {
        const calc = this.stats[i] + 107;
        data = [calc];
        continue;
      }
      const calc = this.stats[i] + 52;
      data = [...data, calc];
    }
    this.nMax = data;
  }

  getNormal() {
    let data: number[] = [];
    for (let i = 0; i < 6; i++) {
      if (i === 0) {
        const calc = this.stats[i] + 75;
        data = [calc];
        continue;
      }
      const calc = this.stats[i] + 20;
      data = [...data, calc];
    }
    this.normal = data;
  }

  getMin() {
    let data: number[] = [];
    for (let i = 0; i < 6; i++) {
      if (i === 0) {
        data = [Number([])];
      }
      const calc = Math.floor((this.stats[i] + 20) * 0.9);
      data = [...data, calc];
    }
    this.min = data;
  }

  ngOnChanges(ngOnChanges: SimpleChanges) {
    if (ngOnChanges["pokemonData"]) {
      this.getStats();
      this.getMax();
      this.getnMax();
      this.getNormal();
      this.getMin();
    }
  }
}
