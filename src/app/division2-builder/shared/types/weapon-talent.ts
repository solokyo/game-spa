import { Attribute } from '@angular/core';

export interface WeaponTalent {
    talentName: string;
    description: string;
    category: string;
    icon: string;
    bounus?: {attribute: Attribute, value: number};
}
