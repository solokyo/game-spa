import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../shared/types/weapon';
import { WeaponTalent } from '../shared/types/weapon-talent';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'd2b-weapon-talent-selector',
  templateUrl: './weapon-talent-selector.component.html',
  styleUrls: ['./weapon-talent-selector.component.css']
})
export class WeaponTalentSelectorComponent implements OnInit {
  @Input() weapon: Weapon;
  weaponTalents: Array<WeaponTalent>;
  constructor(
    private dataService: DataService,
  ) {
    this.dataService.getStable('weaponTalents', '/assets/weapon-talents.json').subscribe(
      data => { this.weaponTalents = data; }
    );
  }

  ngOnInit(): void {
  }

}
