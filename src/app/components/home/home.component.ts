import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
//import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  /*paises:any[]=[];

  constructor(private http:HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (resp:any) =>{
      this.paises = resp;
      console.log(resp);
    });

  }*/
  loading:boolean ;
  newReleases:any[] = [];
  constructor(private spotifyService:SpotifyService) {
    this.loading = true;

  this.spotifyService.getNewReleases()
    .subscribe( data => {
      this.newReleases = data;
      this.loading = false;
    });
  }


}
