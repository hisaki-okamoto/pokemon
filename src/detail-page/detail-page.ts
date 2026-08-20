/** biome-ignore-all lint/style/useImportType: iranai */
/** biome-ignore-all lint/complexity/useLiteralKeys: iranai */
import { ChangeDetectorRef, Component } from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { PokemonClient } from "pokenode-ts";
import { backfront } from "./backfront/backfront";
import { type } from "./type/type";

@Component({
  selector: "detail-page",
  standalone: true,
  imports: [RouterOutlet, type, backfront],
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

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  api = new PokemonClient();

  async getData() {
    const pokemon = await this.api.getPokemonById(this.id);
    this.sprite = String(pokemon.sprites.front_default);
    this.name = String(
      (await this.api.getPokemonSpeciesById(this.id)).names[9].name,
    );
    for (let i = 0; i < pokemon.types.length; i++) {
      const type = await this.api.getTypeByName(pokemon.types[i].type.name);
      this.types = [...this.types, String(type.names[8].name)];
    }
    this.dataType = this.types;
    this.formatId = this.id.toString().padStart(4, "0");
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
