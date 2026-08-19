import { CommonModule } from "@angular/common";
// biome-ignore lint/style/useImportType: a
import {
  ChangeDetectorRef,
  Component,
  Input,
  Output,
  type SimpleChanges,
} from "@angular/core";
import { PokemonClient } from "pokenode-ts";

@Component({
  selector: "backfront",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./backfront.html",
  styleUrl: "./backfront.css",
})
export class backfront {
  @Input() id: number = 2;
  frontName = "";
  frontNumber = "";
  frontSprite = "";
  backName = "";
  backNumber = "";
  backSprite = "";

  constructor(private cdr: ChangeDetectorRef) {}

  api = new PokemonClient();

  async getFront() {
    if (this.id === 1) {
      return;
    }
    const pokemon = await this.api.getPokemonSpeciesById(this.id - 1);
    this.frontName = pokemon.names[9].name;
    this.frontNumber = String(this.id - 1).padStart(4, "0");
    this.frontSprite = String(
      (await this.api.getPokemonById(this.id - 1)).sprites.front_default,
    );
  }

  async getBack() {
    console.log(this.id + 3);
    const pokemon = await this.api.getPokemonSpeciesById(this.id + 1);
    this.backName = pokemon.names[9].name;
    this.backNumber = String(this.id + 1).padStart(4, "0");
    this.backSprite = String(
      (await this.api.getPokemonById(this.id + 1)).sprites.front_default,
    );
  }

  async ngOnChanges(id: SimpleChanges) {
    this.id = Number(this.id);
    await this.getFront();
    await this.getBack();
    this.cdr.markForCheck();
  }
}
