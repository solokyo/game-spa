import { Attribute } from '@angular/core';

export interface WeaponTalent {
    name: string;
    requirementsDescription: string;
    bonusDescription: string
    category: string;
    icon: string;
    availableOn: Array<string>;
    bounus?: {attribute: Attribute, value: number};
}
