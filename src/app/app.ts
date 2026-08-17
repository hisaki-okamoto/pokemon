import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonClient } from 'pokenode-ts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pokemon');
  async ngOnInit () {
    const api = new PokemonClient();

const pokemon = await api.getPokemonByName('luxray');

console.log(pokemon.name); // "luxray"
console.log(pokemon.types.map((slot) => slot.type.name)); // ["electric"]
  }
}
