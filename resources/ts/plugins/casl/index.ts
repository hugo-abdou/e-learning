import type { App } from "vue";

import { AnyAbility, createMongoAbility } from "@casl/ability";
import { AbilityPluginOptions, abilitiesPlugin } from "@casl/vue";
import type { Actions, Rule, Subjects } from "./ability";

export default function (app: App) {
    const userAbilityRules = useCookie<Rule[]>("userAbilityRules");
    const initialAbility = createMongoAbility(userAbilityRules.value ?? []);

    app.use(abilitiesPlugin, initialAbility, {
        useGlobalProperties: true,
    });

    app.use((app: App, ability: AnyAbility) => {
        app.config.globalProperties.$canList = (action: Actions, subjects: Subjects): boolean => subjects.some((subject: any) => ability.can(action, subject));
    }, initialAbility);
}
