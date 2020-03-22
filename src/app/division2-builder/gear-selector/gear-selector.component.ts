import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { StatService } from '../shared/stat.service';
import { UtilService } from '../shared/util.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'd2b-gear-selector',
  templateUrl: './gear-selector.component.html',
  styleUrls: ['./gear-selector.component.css']
})
export class GearSelectorComponent implements OnInit {
  gearSlots: any;
  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private utilService: UtilService,
    private statService: StatService
  ) {
    this.dataService.getStable('gearSlots', '/assets/data.json').subscribe(data => {
      this.gearSlots = data;
    });
  }

  ngOnInit(): void {
  }

}
