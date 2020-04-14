import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { StatService } from '../shared/stat.service';

@Component({
  selector: 'd2b-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent implements OnInit {
  specializations: Array<any>;
  constructor(
    private dataService: DataService,
    private statService: StatService,
  ) { 
    this.dataService.getStable('specializations','/assets/specialization.json').subscribe(data => {
      this.specializations = data;
    })
  }

  ngOnInit(): void {
  }

}
