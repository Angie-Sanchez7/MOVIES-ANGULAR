import { EquipoService, Movie } from './../../services/equipo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  movie: Movie = {
    mov_id: " ",
    mov_title: "",
    mov_year: 0,
    mov_time: 0,
    mov_lang:'',
    mov_dt_rel:'',
    mov_rel_country: ""
  };

    // date = new Date().getFullYear();

  constructor(private EquipoService: EquipoService,
    private Router: Router,
    private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.ActivatedRoute.snapshot.params.id;
    console.log('ID de entrada'+id_entrada)

    if (id_entrada) {
      this.EquipoService.getaMovie(id_entrada).subscribe(
        (res: any) => {
          this.movie = res[0];
        },
        err => console.log(err)
      )
    }
  };

  modifiy() {
    this.EquipoService.modifyMovie(this.movie.mov_id, this.movie).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )

    this.Router.navigate(['/home'])
  }
}
