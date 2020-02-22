import { Attribute } from './attribute';

export interface WeaponMod {
    modName: string;
    slot: string;
    type: string;
    bonus: Array<{attribute: Attribute, value: number}>
}
