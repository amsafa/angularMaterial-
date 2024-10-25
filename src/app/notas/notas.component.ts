import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  estudiantes = [
    {nombre: 'Alberto', nota: 7},
    {nombre: 'David', nota: 10},
    {nombre: 'Alba', nota: 6},
    {nombre: 'Cintia', nota: 8}
  ];

  // Filtros y controles
  filtroNombre = new FormControl('');
  filtroEstado = new FormControl('');

  get estudiantesFiltrados() {
    const nombre = this.filtroNombre.value?.toLowerCase() || '';
    const estado = this.filtroEstado.value;

    return this.estudiantes.filter(estudiante => {
      const esNombre = estudiante.nombre.toLowerCase().includes(nombre);
      const esEstado = estado ? (estado === 'Aprobado' ? estudiante.nota >= 5 : estudiante.nota < 5) : true;
      return esNombre && esEstado;
    });
  }


// Hay que corregir
  agregarEstudiante() {
    const nuevoEstudiante = {nombre: 'Nuevo Estudiante', nota: 0};
    this.estudiantes.push(nuevoEstudiante);
  }

  getEstado(nota: number) {
    return nota >= 5 ? 'Aprobado' : 'Suspenso';
  }
}
