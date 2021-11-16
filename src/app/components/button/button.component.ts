import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  //mark with @Input to insert different properties
  //when using a button object in parent(header Component)
  @Input() text?: string;
  @Input() color?: string;

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  //reusable button with EventEmitter
  //when button gets used we can put into the custom btnClick event
  //the function we want to call and event get's emittet
  onClick() {
    this.btnClick.emit();
  }

}
