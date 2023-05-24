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
  pregunta: any = {};
  puntaje = 0;
  band = false;
  constructor(private service: PreguntasService){

  }
  
  ngOnInit(){
    this.service.getPreguntas().subscribe((data) =>{
      this.preguntas = data.preguntas;
      this.seleccionarPregunta();
    })

  }

  eliminarPregunta(pregunta:any){
    for(let i of this.preguntas){
      this.preguntas = this.preguntas.filter((t) => t.id !== pregunta.id)
      if(this.preguntas.length == 0){
        this.band = true;
      }else{
        this.seleccionarPregunta();
      }
    }
  }

  sumarPuntaje(){
    this.puntaje += 10;
  }

  seleccionarPregunta(){
    for(let i of this.preguntas){
      this.pregunta = i;
      break;
    }
  }
}
