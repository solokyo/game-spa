import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-division2-builder',
  templateUrl: './division2-builder.component.html',
  styleUrls: ['./division2-builder.component.css']
})
export class Division2BuilderComponent implements OnInit {
  weaponSlot;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(val => this.weaponSlot = val.weaponSlot);
    // console.log(this.weaponSlot);

  }

}
