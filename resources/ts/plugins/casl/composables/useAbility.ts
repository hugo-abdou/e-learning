import { useAbility as useCaslAbility } from "@casl/vue";
import type { Actions, ability } from "../ability";
import { capitalizeWords } from "@/helpers";

export const useAbility = () => useCaslAbility<typeof ability>();

export const useAbilities = () => {
    const ability = useAbility();

    const canList = (action: Actions, userRoles: string[]) => {
        return userRoles.some((subject: any) => ability.can(action, subject));
    };
    return { canList };
};
