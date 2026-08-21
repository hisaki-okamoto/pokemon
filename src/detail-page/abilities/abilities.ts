import { Component, Input, type SimpleChanges } from "@angular/core";
import { PokemonClient } from "pokenode-ts";

@Component({
  selector: "abilities",
  imports: [],
  standalone: true,
  templateUrl: "./abilities.html",
  styleUrl: "./abilities.css",
})
export class Abilities {
  @Input() abilities: string[] = [];

  api = new PokemonClient();

  ngOnChanges(ngOnChanges: SimpleChanges) {
    if (ngOnChanges[this.abilities]) {
    }
  }
}
