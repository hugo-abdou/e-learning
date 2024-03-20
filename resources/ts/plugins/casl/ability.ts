import { createMongoAbility } from "@casl/ability";

export type Actions = "create" | "read" | "update" | "delete" | "manage";

// ex: Post, Comment, User, etc. We haven't used any of these in our demo though.
export type Subjects = any;

export interface Rule {
    action: Actions;
    subject: Subjects;
}

export interface UserAbility {
    action: Actions;
    subject: Subjects;
}
export const ability = createMongoAbility<[Actions, Subjects]>();
