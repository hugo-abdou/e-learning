export const paginateArray = (array: unknown[], perPage: number, page: number) => array.slice((page - 1) * perPage, page * perPage);

// pagination meta
export const paginationMeta = computed(() => {
    return <T extends { page: number; itemsPerPage: number }>(options: T, total: number) => {
        const start = (options.page - 1) * options.itemsPerPage + 1;
        const end = Math.min(options.page * options.itemsPerPage, total);

        return `Showing ${start} to ${end} of ${total} entries`;
    };
});

export const genId = <T extends { id: number | string }>(array: T[]) => {
    const { length } = array;

    let lastIndex = 0;

    if (length) lastIndex = Number(array[length - 1]?.id) + 1;

    return lastIndex || length + 1;
};

export const resolveUserRoleVariant = (role: string) => {
    const roleLowerCase = role.toLowerCase();

    if (roleLowerCase === "subscriber") return { color: "warning", icon: "tabler-circle-check" };
    if (roleLowerCase === "author") return { color: "success", icon: "tabler-user" };
    if (roleLowerCase === "maintainer") return { color: "primary", icon: "tabler-chart-pie-2" };
    if (roleLowerCase === "editor") return { color: "info", icon: "tabler-edit" };
    if (roleLowerCase === "admin") return { color: "secondary", icon: "tabler-device-laptop" };

    return { color: "primary", icon: "tabler-user" };
};

export const resolveUserStatusVariant = (stat: string) => {
    const statLowerCase = stat.toLowerCase();
    if (statLowerCase === "pending") return "warning";
    if (statLowerCase === "active") return "success";
    if (statLowerCase === "inactive") return "secondary";

    return "primary";
};
