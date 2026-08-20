/** biome-ignore-all lint/complexity/useLiteralKeys: a */
import { CommonModule } from "@angular/common";
// biome-ignore lint/style/useImportType: a
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
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
  @Input() id: number = 0;
  Name = "";
  Number = 0;
  Format = "";
  Sprite = "";

  constructor(private cdr: ChangeDetectorRef) {}

  api = new PokemonClient();
  @Output() select = new EventEmitter<number>();

  //図鑑番号が一個前のやつ取得してきてる
  async getData() {
    if (this.id === 0) {
      return;
    }
    this.Number = this.id;
    const pokemon = await this.api.getPokemonSpeciesById(this.id);
    this.Name = pokemon.names[9].name;
    this.Format = String(this.id).padStart(4, "0");
    this.Sprite = String(
      (await this.api.getPokemonById(this.id)).sprites.front_default,
    );
  }

  goPage(id: number) {
    this.select.emit(id);
  }

  async ngOnChanges(changeges: SimpleChanges) {
    if (changeges["id"]) {
      this.id = Number(this.id);
      await this.getData();
      this.cdr.markForCheck();
    }
  }
}
