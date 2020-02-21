import { WeaponType } from './weapon-type';

export interface Weapon {
    weaponName: string;
    weaponVariant: string;
    weaponType: WeaponType;
    damage: number;
    rpm: number;
}
