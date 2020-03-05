import { Attribute } from '@angular/core';

export interface WeaponTalent {
    name: string;
    description: string
    icon: string;
    availableOn: Array<string>;
}
