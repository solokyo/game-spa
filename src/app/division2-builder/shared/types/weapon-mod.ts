import { Attribute } from './attribute';

export interface WeaponMod {
    modName: string;
    slot: string;
    availableOn: Array<string>;
    bonus: Array<{attribute: string, value: number}>
}
