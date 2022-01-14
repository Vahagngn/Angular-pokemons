import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(limit: any, offset: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  }

  morePokemons(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  getOnePokemon(index: any) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${index}`)
  }

  getAll(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon`)
  }

}
