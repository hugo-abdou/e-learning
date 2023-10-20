import { CourseDifficulty, CourseStatus, CourseVisibility, MediaStatus, MediaTypes } from "./@core/enums";

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
export const resolveMediaStatusVariant = (stat: number) => {
    if (stat === MediaStatus.Pending) return { lable: "Pending", color: "default", icon: "basil:lock-time-outline" };
    if (stat === MediaStatus.Processing) return { lable: "Processing", color: "info", icon: "healthicons:i-schedule-school-date-time" };
    if (stat === MediaStatus.Completed)
        return { lable: "Completed", color: "success", icon: "material-symbols:published-with-changes-rounded" };
    if (stat === MediaStatus.Error) return { lable: "Error", color: "error", icon: "codicon:error" };
    return { lable: "Inconnue", color: "default", icon: "clarity:unknown-status-line" };
};
export const resolveCourseStatusVariant = (stat: string) => {
    const statLowerCase = stat.toLowerCase();
    if (statLowerCase === CourseStatus.Draft) return { color: "secondary", icon: "basil:lock-time-outline" };
    if (statLowerCase === CourseStatus.Scheduled) return { color: "info", icon: "healthicons:i-schedule-school-date-time" };
    if (statLowerCase === CourseStatus.Published) return { color: "success", icon: "material-symbols:published-with-changes-rounded" };
    if (statLowerCase === CourseStatus.Error) return { color: "error", icon: "codicon:error" };
    return { color: "default", icon: "clarity:unknown-status-line" };
};
export const resolveCourseDifficultyVariant = (stat: string) => {
    const statLowerCase = stat.toLowerCase();
    if (statLowerCase === CourseDifficulty.Beginner) return { color: "secondary", icon: "fluent:learning-app-20-regular" };
    if (statLowerCase === CourseDifficulty.Intermediate) return { color: "primary", icon: "fluent-mdl2:learning-tools" };
    if (statLowerCase === CourseDifficulty.Advanced) return { color: "success", icon: "carbon:machine-learning-model" };
    return { color: "default", icon: "clarity:unknown-status-line" };
};
export const resolveCourseVisibilityVariant = (stat: number) => {
    if (stat === CourseVisibility.Visibil) return { color: "success", icon: "fluent:eye-12-regular" };
    if (stat === CourseVisibility.Hidden) return { color: "default", icon: "fluent:eye-hide-20-regular" };
    return { color: "default", icon: "clarity:unknown-status-line" };
};

export const resolveAttachmentTypeIcon = (type: keyof typeof MediaTypes) => {
    switch (type) {
        case MediaTypes.image:
            return "mdi-image-outline";
        case MediaTypes.video:
            return "mdi-video-outline";
        case MediaTypes.pdf:
            return "mdi-file-document-outline";
        default:
            return "mdi-exclamation";
    }
};

export const resolveDefaultThumbnal = (type: keyof typeof MediaTypes) => {
    switch (type) {
        case MediaTypes.image:
            return "/assets/image-placeholder.jpg";
        case MediaTypes.video:
            return "/assets/video_placeholder.gif";
        case MediaTypes.pdf:
            return "/assets/pdf_placeholder.png";
        default:
            return "";
    }
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
export const UploadBunAttrs: Partial<{}> = {
    class: "border-md border-dashed bg-background w-100 h-100",
    style: "min-height: 100px;aspect-ratio: 16/9",
    variant: "plain",
    color: "secondary"
};

// player.on("timeupdate", event => {
//     const currentTime = event.detail.plyr.currentTime;
//     const duration = event.detail.plyr.duration;
//     const progress = (currentTime / duration) * 100;
//     console.log(`Video Progress: ${progress.toFixed(2)}%`);
// });
