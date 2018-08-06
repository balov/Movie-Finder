import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Movies } from '../models/movies';
const appKey = '05b507bbbeb7303f281513dc7eaddead'

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/'
    popular : string = 'discover/movie?sort_by=popularity.desc'
    theaters : string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
    kids : string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc' 
    drama : string = 'discover/movie?with_genres=18&primary_release_year=2014'
    movie : string = 'movie/'
    movieAuth : string = '?api_key='
    authentication : string = '&api_key='

    constructor(private httpClient : HttpClient) {}

    findAMovie(query) {
        return this.httpClient
        .get('https://api.themoviedb.org/3/search/movie?query=' + query + '&api_key=' + appKey)
    }

    getPopular() : Observable<Movies> {
        return this.httpClient.get<Movies>(this.path + this.popular + this.authentication + appKey)
    }

    getTheaters() : Observable<Movies> {
        return this.httpClient.get<Movies>(this.path + this.theaters + this.authentication + appKey)
    }

    getKidsMovies() : Observable<Movies> {
        return this.httpClient.get<Movies>(this.path + this.kids + this.authentication + appKey)
    }

    getDramaMovies() : Observable<Movies> {
        return this.httpClient.get<Movies>(this.path + this.drama + this.authentication + appKey)
    }

    getMovie(id) {
        return this.httpClient.get(`${this.path}${this.movie}` + id + this.movieAuth + appKey)
    }
}