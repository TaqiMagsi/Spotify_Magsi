import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   data: Array<MovieCard> = [
    { name: "Pritam",profession:"Artist"   ,image: "/assets/image/sidhu.jpg.jpg"},
    
  ]
}
export interface MovieCard{
  name: string;
  profession: string;
  image: string;
}