import { Routes, RouterModule } from '@angular/router'
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core'
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';

const routes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: SelectedMovieComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutesModule { }