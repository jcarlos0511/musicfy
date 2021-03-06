import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ArtistsComponent } from "./components/artists/artists.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { SongsComponent } from "./components/songs/songs.component";
import { SongComponent } from './components/song/song.component';

export const _routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "artists", component: ArtistsComponent },
  { path: "artist/:id/:name", component: ArtistComponent },
  { path: "songs", component: SongsComponent },
  { path: "song/:id", component: SongComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
