import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: String = "Liste des pokémons";
  public pokemons: Pokemon[];

  
  ngOnInit() {
    this.pokemons = POKEMONS;
  }


  selectPokemon(pokemon:Pokemon){
    alert("Vous avez cliqué sur " + pokemon.name);
  }
}
