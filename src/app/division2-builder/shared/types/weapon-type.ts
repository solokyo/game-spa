import { Attribute } from './attribute';

export interface WeaponType {
    name: string;
    bonus: Array<{attribute: Attribute, value: number}>
}
