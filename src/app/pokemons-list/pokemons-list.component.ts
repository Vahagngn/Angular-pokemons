import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})

export class PokemonsListComponent implements OnInit {

  public pokemons: any[] = []
  public page = 1
  public countPokemons: number

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getAllPokemons()
  }

  getAllPokemons(){
    this.dataService.getPokemons(10, this.page + 0).subscribe((data: any) => {
      this.countPokemons = data.count
      data.results.forEach((result: any) => {
        this.dataService.morePokemons(result.name).subscribe((uniqData: any) => {
          this.pokemons.push(uniqData)
        })
      })
    })
  }

}
