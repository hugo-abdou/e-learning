export const Skins = {
  Default: "default",
  Bordered: "bordered",
} as const;

export const Theme = {
  Light: "light",
  Dark: "dark",
  System: "system",
} as const;

export const Layout = {
  Vertical: "vertical",
  Horizontal: "horizontal",
  Collapsed: "collapsed",
} as const;

export const Direction = {
  Ltr: "ltr",
  Rtl: "rtl",
} as const;

export const CourseDifficulty = {
  Beginner: "beginner",
  Intermediate: "intermediate",
  Advanced: "advanced",
} as const;
export const CourseDifficultyColors = {
  Beginner: "#3498db", // Cool Blue for Beginner
  Intermediate: "#27ae60", // Cool Green for Intermediate
  Advanced: "#8e44ad", // Cool Purple for Advanced
} as const;
export const CourseStatus = {
  Draft: "draft",
  Private: "private",
  Scheduled: "scheduled",
  Published: "published",
  Closed: "closed",
  Error: "error",
} as const;
export const QuizStatus = {
  Draft: "draft",
  Private: "private",
  Scheduled: "scheduled",
  Published: "published",
  Closed: "closed",
  Error: "error",
} as const;
export const CourseStatusColors = {
  Draft: "#888888", // Cool Gray for Draft status
  Private: "#8e44ad", // Vivid Purple for Private status
  Scheduled: "#3498db", // Vivid Blue for Scheduled status
  Published: "#27ae60", // Vivid Green for Published status
  Closed: "#c59f05", // Golden Yellow for Closed status
  Error: "#e74c3c", // Vivid Red for Error status
} as const;
export const CourseVisibility = {
  Visibil: 1,
  Hidden: 0,
} as const;
export const MediaStatus = {
  Pending: 0,
  Processing: 1,
  Completed: 2,
  Error: 3,
} as const;
export const MediaTypes = {
  video: "video",
  image: "image",
  pdf: "pdf",
} as const;
export const RouteTransitions = {
  Fade: "app-transition-fade",
  None: "none",
  "Zoom Fade": "app-transition-zoom-fade",
  "Fade Bottom": "app-transition-fade-bottom",
  "Slide Fade": "app-transition-slide-fade",
  "Zoom out": "app-transition-zoom-out",
} as const;
