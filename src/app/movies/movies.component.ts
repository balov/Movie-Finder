import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Movies
  theaters: Movies
  kids: Movies
  drama: Movies
  searchResults : any
  isSearch : boolean

  constructor(private moviesService: MoviesService) { }
  search(myQuery) {
    this.moviesService
    .findAMovie(myQuery)
    .subscribe(data => {
      this.searchResults = data
      this.isSearch = true
    })  
  }

  ngOnInit() {
    this.moviesService
    .getPopular()
    .subscribe(data => {
      this.popular = data
    })

    this.moviesService
    .getTheaters()
    .subscribe(data => {
      this.theaters = data
    })

    this.moviesService
    .getKidsMovies()
    .subscribe(data => {
      this.kids = data
    })

    this.moviesService
    .getDramaMovies()
    .subscribe(data => {
      this.drama = data
    })
  }

}
