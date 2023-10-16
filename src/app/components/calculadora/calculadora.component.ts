import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  private resultado: number;
  private num1: number;
  private num2: number;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;
  }



}
