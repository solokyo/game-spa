import { Attribute } from './attribute';

export interface WeaponMod {
    name: string;
    slot: string;
    availableOn: Array<string>;
    bonus: Array<{attribute: string, value: number}>
}
