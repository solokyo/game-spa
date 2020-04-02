import { Attribute } from './attribute';

export interface WeaponType {
    name: string;
    icon: string;
    bonus: Array<{attribute: Attribute, value: number}>
}
