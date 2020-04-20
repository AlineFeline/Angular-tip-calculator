import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']

})
export class CalculatorComponent {

  titlePage: string = "Tip calculator ";
  isDisplay: boolean = false;
  resulttotal: any;
  resultpers: any;

 
 toggleButton(subtotal, prct, nbr) {
 
 this.isDisplay = !this.isDisplay;
 this.calculate (subtotal, prct, nbr);  
 
}

calculate(subtotal, prct, nbr) {

this.resulttotal = parseInt (subtotal, 10) * parseInt (prct, 10) / 100 + parseInt (subtotal, 10);
this.resultpers = this.resulttotal / parseInt (nbr, 10);
}

}