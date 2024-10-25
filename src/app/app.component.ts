import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotasComponent } from './notas/notas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejerciciosAngularMaterial';
}
