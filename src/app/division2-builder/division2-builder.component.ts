import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-division2-builder',
  templateUrl: './division2-builder.component.html',
  styleUrls: ['./division2-builder.component.css']
})
export class Division2BuilderComponent implements OnInit {
  weaponSlots: Array<{ name: string, category: string }>;
  gearSlots: Array<any>;
  constructor(
    private dataService: DataService,
  ) {
    this.dataService.getStable('weaponSlots', '/assets/data.json').subscribe(data => {
      this.weaponSlots = data;
    });
    this.dataService.getStable('gearSlots', '/assets/data.json').subscribe(data => {
      this.gearSlots = data;
    });
  }

  ngOnInit(): void { }

}
