import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gear } from '../shared/types/gear';
import { MatDialog } from '@angular/material/dialog';
import { ObjectPickerDialogComponent } from '../object-picker-dialog/object-picker-dialog.component';
import { UtilService } from '../shared/util.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'd2b-gear-attribute-selector',
  templateUrl: './gear-attribute-selector.component.html',
  styleUrls: ['./gear-attribute-selector.component.css']
})
export class GearAttributeSelectorComponent implements OnInit {
  @Input() gear: Gear;
  @Output() updated = new EventEmitter<boolean>();
  gearAttributes: Array<any>;
  constructor(
    public dialog: MatDialog,
    private utilService: UtilService,
    private dataService: DataService
  ) {
    this.dataService.getStable('gearAttributes', '/assets/gear-attributes.json').subscribe(data => {
      this.gearAttributes = data;
    });
  }

  ngOnInit(): void {
  }

  selectGearAttribute(avaliableMod: any): void {
    const dialogRef = this.dialog.open(ObjectPickerDialogComponent, {
      width: '1080px',
      data: {
        key: 'attribute', value: this.gearAttributes
      }
    });

    dialogRef.afterClosed().subscribe(attribute => {
      console.log(attribute);
      if (attribute) {
        this.gear.secondaryAttribute = attribute;
        this.updated.emit(attribute);
      }
    });
  }
}
