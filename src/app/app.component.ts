import { Component, EventEmitter, Output } from '@angular/core';
import { PreguntasService } from './services/preguntas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trivia';
  preguntas: any[] = [];
  puntaje = 0;

  constructor(private service: PreguntasService){

  }
  
  ngOnInit(){
    this.service.getPreguntas().subscribe((data) =>{
      this.preguntas = data.preguntas;
    })
  }

  eliminarPregunta(pregunta:any){
    for(let i of this.preguntas){
      this.preguntas = this.preguntas.filter((t) => t.id !== pregunta.id)
    }
  }

  sumarPuntaje(){
    this.puntaje += 10;
  }
}
