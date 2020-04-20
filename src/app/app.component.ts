/*
For this lab you are to create a tip calculator. 
a) It will calculate the total bill based on the tip percentage as well as calculate the bill per person.
Two-way binding, event binding and encapulating component styles will be applied in this exercise

Instructions:
1. Create a calculator component and its template
2. The component will have the following properties
a)billAmount, datatype string
b)tip, datatype string
c)numberOfPeople, datatype string

d)totalBill, datatype number
e)billPerPerson, datatype number

3. A method called calculate of datatype void, which calculates 
a)the total bill, including tip 
b)the bill per person. 
   
4. For the template
a) 3 input fields that uses two way binding to assign what the user enters on the textbox to a property on the class. 
b) A button called calculate that calls the method calculate.
b) Two headings: Total Bill and Bill per Person that displays the results through interpolation from the method. 

Tip: When passing data from an input field, it passes the data as a string. Therefore, upon calculation you must convert the properties to an int, look up parseInt. 

*/


import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
