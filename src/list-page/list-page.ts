type Pokemon = {
	id: number;
	name: string;
};

import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
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
	count: number[] = Array.from({ length: 5 }, (_, i) => this.start + i);

	async getList() {
		for (let i = 0; i < 5; i++) {
			const getData = await this.api.getPokemonSpeciesById(this.count[i]);
			this.pokemons.push({
				id: getData.id,
				name: String(getData.names[9].name),
			});
		}
	}

	async ngAfterViewInit() {
		await this.getList();
		console.log(this.pokemons);
	}
}
