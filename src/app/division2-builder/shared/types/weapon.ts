import { WeaponType } from './weapon-type';
import { WeaponTalent } from './weapon-talent';
import { WeaponMod } from './weapon-mod';

export interface Weapon {
    weaponName: string;
    weaponVariant: string;
    weaponType: WeaponType;
    damage: number;
    rpm: number;
    magSize: number;
    optimalRange: string;
    critHitRange: number;
    reloadSpeed: number;
    talent: WeaponTalent;
    mods: Array<{slot: string, type: Array<string>}>;
}
