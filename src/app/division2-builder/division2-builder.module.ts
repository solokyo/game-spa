import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { Division2BuilderComponent } from './division2-builder.component';
import { StatBoardComponent } from './stat-board/stat-board.component';
import { WeaponSelectorComponent } from './weapon-selector/weapon-selector.component';
import { TalentSelectorComponent } from './talent-selector/talent-selector.component';



@NgModule({
  declarations: [Division2BuilderComponent, StatBoardComponent, WeaponSelectorComponent, TalentSelectorComponent],
  imports: [
    CommonModule, HttpClientModule,
  ],
  exports: [Division2BuilderComponent],
})
export class Division2BuilderModule { }
