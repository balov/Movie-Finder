import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Movies } from '../models/movies';
const appKey = '05b507bbbeb7303f281513dc7eaddead'

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/'
    popular : string = 'discover/movie?sort_by=popularity.desc'
    theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
    authentication : string = '&api_key='

    constructor(private httpClient : HttpClient) {}

    getPopular() : Observable<Movies> {
        return this.httpClient.get<Movies>(this.path + this.popular + this.authentication + appKey)
    }

    getTheaters() : Observable<Movies> {
        return this.httpClient.get<Movies>(this.path + this.theaters + this.authentication + appKey)
    }
}