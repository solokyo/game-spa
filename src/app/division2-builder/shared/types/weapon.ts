import { WeaponType } from './weapon-type';
import { WeaponTalent } from './weapon-talent';
import { WeaponMod } from './weapon-mod';

export interface Weapon {
    name: string;
    variant: string;
    type: string | WeaponType;
    category: string;
    bonus: Array<{ attribute: string, value: number }>;
    rarity?: string;
    talent?: WeaponTalent;
    avaliableMods?: Array<{slot:string, type: string}>;
    mods?: Array<WeaponMod>;
}
