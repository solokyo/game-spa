import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { StatService } from '../shared/stat.service';
@Component({
  selector: 'd2b-stat-board',
  templateUrl: './stat-board.component.html',
  styleUrls: ['./stat-board.component.css']
})
export class StatBoardComponent implements OnInit {
  stats
  constructor(
    private dataService: DataService,
    private statService: StatService
  ) { 
    //this.statService.getStats().subscribe(data => {this.stats = data});
    this.dataService.getStable('statBoardInit','/assets/data.json').subscribe(data => {this.stats = data});
    console.log(this.stats);
  }

  ngOnInit(): void {
  }

}
