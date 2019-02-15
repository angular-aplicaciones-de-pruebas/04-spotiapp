import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista:any = {};
  topTracks:any = {};
  loadingArtista:boolean;
  constructor(private activatedRoute:ActivatedRoute,
  private spotifyService:SpotifyService ) {

    this.loadingArtista = true;
    this.activatedRoute.params.subscribe(params=>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

  }
  getArtista(id:string){
  //  this.loadingArtista = true;
    this.spotifyService.getArtista(id)
    .subscribe(artista =>{
      this.artista = artista;
      this.loadingArtista = false;

    });

  }
  getTopTracks(id:string){
    this.loadingArtista = true;
    this.spotifyService.getTopTracks(id)
    .subscribe( topTracks =>{
      this.topTracks = topTracks;
      console.log(topTracks);
      this.loadingArtista = false;

    });

  }


}
