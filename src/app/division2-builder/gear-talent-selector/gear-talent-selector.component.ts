import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gear } from '../shared/types/gear';

@Component({
  selector: 'd2b-gear-talent-selector',
  templateUrl: './gear-talent-selector.component.html',
  styleUrls: ['./gear-talent-selector.component.css']
})
export class GearTalentSelectorComponent implements OnInit {
  @Input() gear: Gear;
  @Output() updated = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
