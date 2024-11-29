import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  type { InvestmentInput } from '../investment-input';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})



export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();


  initialinvestment ='0';
  annualinvestment ='0';
  expectedreturn ='5';
  duration ='10';

onSubmit(){
  this.calculate.emit({
    initialInvestment: +this.initialinvestment,
    annualInvestment: +this.annualinvestment,
    expectedReturn: +this.expectedreturn,
    duration: +this.duration
  
  });

}
}
