import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private EquipoService: EquipoService) {}

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo() {
    this.EquipoService.getEquipos().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
