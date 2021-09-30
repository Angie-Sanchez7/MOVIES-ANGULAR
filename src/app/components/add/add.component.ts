import { EquipoService, Movie } from 'src/app/services/equipo.service';

import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
 
  movie: Movie={
    mov_id: " ",
    mov_title: "",
    mov_year: 0,
    mov_time: 0 ,
    mov_lang:'',
    mov_dt_rel:"",
    mov_rel_country: ""
  };

  constructor(private EquipoService:EquipoService, private Router: Router) { }


  ngOnInit(): void {
  }
 



  add(){
    delete this.movie.mov_id

    this.EquipoService.addMovie(this.movie).subscribe();
    this.Router.navigate(['/home'])
  }

}