import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  header = {  
    name: "Name", 
    surname: "Surname", 
    birthday: "Birthday"
  }
  personsArray: any[] = [
    {name: "Ivan", surname: "Ivanov", birthday: "13.01.1990", isActive: false},
    {name: "Petr", surname: "Petrov", birthday: "13.01.1992", isActive: false},
    {name: "Sidor", surname: "Sidorov", birthday: "13.01.1997", isActive: false}
  ]
  
  constructor() { }

  ngOnInit() {
  }

  saveEditedItem(inputText, person, personItem) {
    if (person.name == personItem) {
      person.name = inputText;
    } else if (person.surname == personItem) {
      person.surname = inputText;
    } else {
      person.birthday = inputText;
    }
  }

  toggleDisplayMode(person) {
    person.isActive = !person.isActive;
  }

}
