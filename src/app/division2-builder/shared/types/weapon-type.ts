import { Attribute } from './attribute';

export interface WeaponType {
    weaponTypeName: string;
    bonus: Array<{attribute: Attribute, value: number}>
}
