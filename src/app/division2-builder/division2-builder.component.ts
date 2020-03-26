import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-division2-builder',
  templateUrl: './division2-builder.component.html',
  styleUrls: ['./division2-builder.component.css']
})
export class Division2BuilderComponent implements OnInit {
  weaponSlots: Array<{ name: string, category: string }>;
  constructor(
    private dataService: DataService,
  ) { 
    this.dataService.getStable('weaponSlot', '/assets/data.json').subscribe(data => {
      this.weaponSlots = data;
    });
  }

  ngOnInit(): void {}

}
