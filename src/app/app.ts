import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PokemonClient, UtilityClient } from "pokenode-ts";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	protected readonly title = signal("pokemon");
	async ngOnInit() {
		// const api = new PokemonClient();
		// const pokemon = await api.getPokemonSpeciesByName("luxray");
		// console.log(pokemon); // "luxray"
		// // console.log(pokemon.types.map((slot) => slot.type.name)); // ["electric"]
		// const api2 = new UtilityClient();
		// const japanese = await api2.getLanguageByName("");
		// console.log(japanese); // true
		// const kairosu = await api.getPokemonSpeciesById(127);
		// console.log(kairosu.names);
	}
}
