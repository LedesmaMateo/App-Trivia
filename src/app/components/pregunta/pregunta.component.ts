import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent {
  @Input() pregunta: any = {};
  @Output() eliminar: EventEmitter<any> = new EventEmitter();
  @Output() puntaje: EventEmitter<any> = new EventEmitter();

  constructor(){}

  ngOnInit(){
    console.log(this.pregunta);
  }

  eleccion(event: Event){
    if(event == this.pregunta.res){
      alert("Respuesta Correcta...")
      this.puntaje.emit();
    }else{
      alert("Respuesta Incorrecta...")
    }
    
    this.eliminar.emit(this.pregunta);
  }
}
