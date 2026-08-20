/** biome-ignore-all lint/style/useImportType: iranai */
/** biome-ignore-all lint/complexity/useLiteralKeys: iranai */
type Data = {
  H: number;
  A: number;
  B: number;
  C: number;
  D: number;
  S: number;
};

import { ChangeDetectorRef, Component } from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { PokemonClient } from "pokenode-ts";
import { Backfront } from "./backfront/backfront";
import { Stats } from "./stats/stats";
import { Type } from "./type/type";

@Component({
  selector: "detail-page",
  standalone: true,
  imports: [RouterOutlet, Type, Backfront, Stats],
  templateUrl: "./detail-page.html",
  styleUrl: "./detail-page.css",
})
export class Detail {
  id: number = 0;
  sprite = "";
  name = "";
  types: string[] = [];
  formatId = "";
  dataType: string[] = [];
  pokemonData: Data = { H: 0, A: 0, B: 0, C: 0, D: 0, S: 0 };
  shiny = "";

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  api = new PokemonClient();

  async getData() {
    //データを取得
    const pokemon = await this.api.getPokemonById(this.id);
    console.log(pokemon);
    //メインで表示するのに必要なデータ
    this.sprite = String(pokemon.sprites.front_default);
    this.shiny = String(pokemon.sprites.front_shiny);
    const jp = await this.api.getPokemonSpeciesById(this.id);
    this.name = jp.names[9].name;
    //タイプを配列にする
    //一つずつ日本語化をしている
    for (let i = 0; i < pokemon.types.length; i++) {
      const type = await this.api.getTypeByName(pokemon.types[i].type.name);
      this.types = [...this.types, String(type.names[8].name)];
    }
    this.pokemonData = {
      H: Number(pokemon.stats[0].base_stat),
      A: Number(pokemon.stats[1].base_stat),
      B: Number(pokemon.stats[2].base_stat),
      C: Number(pokemon.stats[3].base_stat),
      D: Number(pokemon.stats[4].base_stat),
      S: Number(pokemon.stats[5].base_stat),
    };
    //コンポーネントに渡す用
    this.dataType = this.types;
    //図鑑番号を0001みたいにするやつ
    this.formatId = this.id.toString().padStart(4, "0");
  }

  //色違いをクリックすると通常と入れ替える
  changeShiny() {
    const keep = this.shiny;
    this.shiny = this.sprite;
    this.sprite = keep;
  }

  goPage(id: number) {
    this.toParamSet(id);
  }

  toParamSet(id: number) {
    this.router.navigate(["/detail"], {
      queryParams: {
        id: id,
      },
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      if (params) {
        this.id = params["id"];
        await this.getData();
        this.cdr.markForCheck();
      }
    });
  }
}
