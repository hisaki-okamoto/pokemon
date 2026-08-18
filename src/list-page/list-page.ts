/** biome-ignore-all lint/complexity/useLiteralKeys: - */
type Pokemon = {
  id: number;
  name: string;
};

// biome-ignore lint/style/useImportType: -
import { ChangeDetectorRef, Component } from "@angular/core";
// biome-ignore lint/style/useImportType: -
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { PokemonClient } from "pokenode-ts";

@Component({
  selector: "list-page",
  imports: [RouterOutlet],
  templateUrl: "./list-page.html",
  styleUrl: "./list-page.css",
})
export class List {
  api = new PokemonClient();

  pokemons: Pokemon[] = [];
  start = 1;
  count: number[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  async getList() {
    this.count = Array.from({ length: 5 }, (_, i) => this.start + i);
    this.pokemons.length = 0;
    for (let i = 0; i < this.count.length; i++) {
      const getData = await this.api.getPokemonSpeciesById(this.count[i]);
      this.pokemons.push({
        id: getData.id,
        name: String(getData.names[9].name),
      });
    }
    this.cdr.markForCheck();
  }

  backPage() {
    this.start -= this.count.length;
    this.toParam();
  }
  frontPage() {
    this.start += this.count.length;
    this.toParam();
  }

  toParam() {
    this.router.navigate([""], {
      queryParams: {
        start: this.start,
      },
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      if (params) {
        if (
          !Number.isNaN(Number(params["start"])) &&
          Number(params["start"]) > 0
        ) {
          this.start = Number(params["start"]);
        } else {
          this.start = 1;
        }
        await this.getList();
        this.cdr.markForCheck();
      }
    });
  }
}
