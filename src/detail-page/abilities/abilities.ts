/** biome-ignore-all lint/complexity/useLiteralKeys: a */
/** biome-ignore-all lint/style/useImportType: a */
import {
  ChangeDetectorRef,
  Component,
  Input,
  type SimpleChanges,
} from "@angular/core";
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
  ability: string[] = [];

  api = new PokemonClient();
  constructor(private cdr: ChangeDetectorRef) {}

  async getAbility() {
    this.ability.length = 0;
    for (let i = 0; i < this.abilities.length; i++) {
      const get = await this.api.getAbilityByName(this.abilities[i]);
      this.ability = [...this.ability, String(get.names[0].name)];
    }
    console.log(this.ability);
    this.abilities.length = 0;
  }

  async ngOnChanges(ngOnChanges: SimpleChanges) {
    if (ngOnChanges["abilities"]) {
      await this.getAbility();
      this.cdr.markForCheck();
    }
  }
}
