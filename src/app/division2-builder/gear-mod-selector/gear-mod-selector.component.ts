import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gear } from '../shared/types/gear';

@Component({
  selector: 'd2b-gear-mod-selector',
  templateUrl: './gear-mod-selector.component.html',
  styleUrls: ['./gear-mod-selector.component.css']
})
export class GearModSelectorComponent implements OnInit {
  @Input() gear: Gear;
  @Output() updated = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
