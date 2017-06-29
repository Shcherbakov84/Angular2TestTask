import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {
  inputField: string;

  @Input() personProperty: string;
  
  @Output()
  editEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.inputField = this.personProperty;
  } 

  triggerEditEvent() {
    this.editEvent.emit(this.inputField); 
  }
}
