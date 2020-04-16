import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UtilService } from '../shared/util.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'd2b-keeners-watch',
  templateUrl: './keeners-watch.component.html',
  styleUrls: ['./keeners-watch.component.css']
})
export class KeenersWatchComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private utilService: UtilService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
