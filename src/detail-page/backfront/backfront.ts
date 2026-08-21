import { CommonModule } from "@angular/common";
// biome-ignore lint/style/useImportType: a
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { PokemonClient } from "pokenode-ts";

@Component({
  selector: "backfront",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./backfront.html",
  styleUrl: "./backfront.css",
})
export class Backfront {
  @Input() id: number = 2;
  frontName = "";
  frontNumber = 0;
  fFormat = "";
  frontSprite = "";
  backName = "";
  backNumber = 0;
  bFormat = "";
  backSprite = "";

  constructor(private cdr: ChangeDetectorRef) {}

  api = new PokemonClient();
  @Output() select = new EventEmitter<number>();

  //図鑑番号が一個前のやつ取得してきてる
  async getFront() {
    if (this.id === 1) {
      return;
    }
    this.frontNumber = this.id - 1;
    const pokemon = await this.api.getPokemonSpeciesById(this.id - 1);
    this.frontName = pokemon.names[9].name;
    this.fFormat = String(this.id - 1).padStart(4, "0");
    this.frontSprite = (await this.api.getPokemonById(this.id - 1)).sprites
      .front_default as string;
  }

  //図鑑番号一個後
  async getBack() {
    this.backNumber = this.id + 1;
    const pokemon = await this.api.getPokemonSpeciesById(this.id + 1);
    this.backName = pokemon.names[9].name;
    this.bFormat = String(this.id + 1).padStart(4, "0");
    this.backSprite = (await this.api.getPokemonById(this.id + 1)).sprites
      .front_default as string;
  }

  goPage(id: number) {
    this.select.emit(id);
  }

  async ngOnChanges() {
    this.id = Number(this.id);
    await this.getFront();
    await this.getBack();
    this.cdr.markForCheck();
  }
}
