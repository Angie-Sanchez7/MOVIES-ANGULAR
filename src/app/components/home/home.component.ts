import { Component, OnInit } from '@angular/core';
import { EquipoService, Movie } from '../../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //variable
  ListarMovie: Movie[] = [];


  constructor(private EquipoService: EquipoService, private router: Router) {}

  ngOnInit(): void {
    this.listarMovie();
  }
  
  fixDate(date:string ){
    const newDate:string[] =date.split('-')
    return [newDate[2].split('T')[0],newDate[1], newDate[0]].join('-')
  }



  listarMovie() {
    this.EquipoService.getMovies().subscribe(
      res => {
        console.log(res);
        this.ListarMovie = <any>res;
      },
      (err) => console.log(err)
    );
  }

  delet(id: any){
    console.log(id)
    this.EquipoService.deletMovie(id).subscribe( 
      res=>{
        console.log('Movie eliminada', res);
        this.listarMovie()
    },
      err=> console.log(err)
    )
  }

  modify(id:any){
    this.router.navigate(['/edit/'+ id]);
  }
}
