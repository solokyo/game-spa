import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { MaterialModule} from '../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { Division2BuilderComponent } from './division2-builder.component';
import { StatBoardComponent } from './stat-board/stat-board.component';
import { WeaponSelectorComponent } from './weapon-selector/weapon-selector.component';
import { WeaponTalentSelectorComponent } from './weapon-talent-selector/weapon-talent-selector.component';
import { ObjectPickerDialogComponent } from './object-picker-dialog/object-picker-dialog.component';
import { WeaponModSelectorComponent } from './weapon-mod-selector/weapon-mod-selector.component';



@NgModule({
  declarations: [Division2BuilderComponent, StatBoardComponent, WeaponSelectorComponent, ObjectPickerDialogComponent, WeaponTalentSelectorComponent, WeaponModSelectorComponent],
  imports: [
    CommonModule, HttpClientModule,MaterialModule,BrowserAnimationsModule
  ],
  exports: [Division2BuilderComponent],
})
export class Division2BuilderModule { }
