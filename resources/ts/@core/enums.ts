export const Skins = {
    Default: "default",
    Bordered: "bordered"
} as const;
export const CourseStatus = {
    Draft: "draft",
    Scheduled: "scheduled",
    Published: "published",
    Error: "error"
} as const;
export const MediaStatus = {
    Pending: 0,
    Processing: 1,
    Completed: 2,
    Error: 3
} as const;
export const CourseDifficulty = {
    Beginner: "beginner",
    Intermediate: "intermediate",
    Advanced: "advanced"
} as const;
export const RouteTransitions = {
    Fade: "app-transition-fade",
    None: "none",
    "Zoom Fade": "app-transition-zoom-fade",
    "Fade Bottom": "app-transition-fade-bottom",
    "Slide Fade": "app-transition-slide-fade",
    "Zoom out": "app-transition-zoom-out"
} as const;
