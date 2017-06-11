import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  result: number = 0;
  Sum(operand: number): void {
    this.result += operand;
  }
  Extract(operand: number): void {
    this.result -= operand;
  }
  Multiply(operand: number): void {
    this.result *= operand;
  }
  Divide(operand: number): void {
    if (operand == 0) return;
    this.result /= operand;
  }
}
