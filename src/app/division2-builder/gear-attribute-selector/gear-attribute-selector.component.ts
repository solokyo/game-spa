import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gear } from '../shared/types/gear';

@Component({
  selector: 'd2b-gear-attribute-selector',
  templateUrl: './gear-attribute-selector.component.html',
  styleUrls: ['./gear-attribute-selector.component.css']
})
export class GearAttributeSelectorComponent implements OnInit {
  @Input() gear: Gear;
  @Output() updated = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
