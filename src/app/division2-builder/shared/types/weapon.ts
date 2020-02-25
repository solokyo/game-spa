import { WeaponType } from './weapon-type';
import { WeaponTalent } from './weapon-talent';
import { WeaponMod } from './weapon-mod';

export interface Weapon {
    name: string;
    variant: string;
    type: WeaponType;
    category: 'primary'|'sidearm';
    damage: number;
    rpm: number;
    magSize: number;
    optimalRange: string;
    critHitRange: number;
    reloadSpeed: number;
    activeTalent?: WeaponTalent;
    weaponHandlingTalent?: WeaponTalent;
    passiveTalent?: WeaponTalent;
    avaliableMods: Array<{slot:string, type: Array<string>}>;
    mods?: Array<WeaponMod>;
}
