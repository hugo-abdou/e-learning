import { OutputData } from "@editorjs/editorjs";
import { CourseDifficulty, CourseStatus, MediaStatus, QuizStatus, UserStatus } from "./@core/enums";

interface User {
  id: number;
  avatar: string;
  email: string;
  name: string;
  verified: boolean;
  roles: string[];
  permissions: string[];
  avaliableRoles: string[];
  readonly status: (typeof UserStatus)[keyof typeof UserStatus];
}
interface OnlineUsers {
  id: number;
  name: string;
  avatar: string;
  status: (typeof UserStatus)[keyof typeof UserStatus];
}

interface Student extends User {
  roles: ["student"];
  completed_courses: number;
  in_progress_courses: number;
}

interface UserForm extends Partial<User> {
  password?: string;
  password_confirmation?: string;
  terms?: boolean;
}

interface LoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

interface UserDevice {
  agent: {
    is_desktop: boolean;
    platform: string;
    browser: string;
  };
  ip_address: string;
  is_current_device: boolean;
  last_active: string;
}

interface Role {
  id?: number;
  name: string;
  type?: string;
  permissions: Array<string>;
  payment_link?: string;
  users?: User[];
}
interface Permission {
  id: number;
  name: string;
}

interface BaseMedia {
  id: number;
  mime_type: string;
  name: string;
  path?: string;
  status: (typeof MediaStatus)[keyof typeof MediaStatus];
  thumb_url: string;
  url: string;
  driver?: string;
  data: any;
  width: number;
  height: number;
  size: number;
}
interface VideoMedia extends BaseMedia {
  uuid: string;
  preview_url: string;
  type: "video";
  playing: boolean;
  duration: number;
}
interface ImageMedia extends BaseMedia {
  type: "image";
}
interface DocumentMedia extends BaseMedia {
  type: "pdf";
  watermark: string;
}

export type MediaType = DocumentMedia | ImageMedia | VideoMedia;
export type Attachment = MediaType & {
  visibility: string[];
  download: boolean;
  progress?: number;
  name: string;
  slug: string;
};

interface LinkData {
  url: string | null;
  label: string;
  active: boolean;
}

interface MetaData {
  current_page: number;
  from: number;
  last_page: number;
  links: LinkData[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface PaginatedResource<T> {
  data: T[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: MetaData;
}

interface JsonResponse<T> {
  message?: string;
  data: T;
}
interface ResourceResponse<T> {
  meta?: PaginationMeta;
  links?: PaginationLink[];
  data: T;
}
interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

interface StatisticsCardType {
  title: string;
  value: string;
  change: number;
  desc: string;
  icon: IconValue;
  iconColor: string;
}

type IconValue = string | (string | [path: string, opacity: number])[];

export interface GridColumn {
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}
// Data table
export interface SortItem {
  key: string;
  order?: boolean | "asc" | "desc";
}
export interface TableOptions {
  page: number;
  itemsPerPage: number;
  sortBy: readonly SortItem[];
  groupBy: readonly SortItem[];
  search: string | undefined;
}

// define categories type
interface Category {
  id: number;
  name: string;
  type: string;
  parent_id?: number;
  children: Category[];
}
interface CategoryWithPath extends Category {
  path: string;
}

export interface ChatMessage {
  id: number;
  message: string;
  time: string;
  senderId: number;
  feedback: {
    isSent: boolean;
    isDelivered: boolean;
    isSeen: boolean;
  };
}

export interface Chat {
  id: number;
  userId: number;
  unseenMsgs: number;
  messages: ChatMessage[];
}

// ℹ️ This is chat type received in response of user chat
export interface ChatOut {
  id: Chat["id"];
  unseenMsgs: Chat["unseenMsgs"];
  userId: number;
  messages: ChatMessage[];
  // @ts-expect-error Indexed Access Types
  lastMessage: ChatMessage | undefined;
}

export interface UserWithChat extends User {
  chat: ChatOut;
}

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  author: Author;
  // prerequisite_id?: number | null;
  status: (typeof CourseStatus)[keyof typeof CourseStatus];
  thumbnail?: string;
  duration: number;
  difficulty: (typeof CourseDifficulty)[keyof typeof CourseDifficulty];
  chapters: Chapter[];
  quizzes: Quiz[];
  categories: CategoryWithPath[];
  chaptersCount?: number;
  progress?: number;
  studentsCount?: number;
  schedule_at: string;
  closed_at: string;
}

interface Quiz {
  id: number;
  title: string;
  slug: string;
  description: string;
  status: (typeof QuizStatus)[keyof typeof QuizStatus];
  duration: number;
  progress: number;
  questions: Question[];
  attachments: Attachment[];
  schedule_at?: string;
  closed_at?: string;
}
interface Question {
  id: number;
  allow_custom_answer: boolean;
  show_answer_after_response: boolean;
  answer: OutputData;
  question: OutputData;
  options: Options[];
  student_answer: {
    answers: number[];
    custom_answer: OutputData;
    is_correct: boolean;
    status: number;
  } | null;
}
interface Options {
  id: number | string;
  option: string;
  points: number;
  is_correct: boolean;
}
interface QuestionAnswer {
  custom_answer: OutputData | undefined;
  answers: number[];
}
interface QuizForm extends Omit<Quiz, "id" | "schedule_at" | "closed_at" | "questions" | "attachments"> {
  // questions: number[];
  id: Partial<Quiz["id"]>;
  slug: Partial<Quiz["slug"]>;
  questions: number[];
  attachments: { [key: number]: any };
}

interface Chapter {
  id: number;
  order: number;
  course_id?: number;
  title: string;
  attachments: Attachment[];
}
interface CourseForm extends Omit<Course, "id" | "slug" | "duration" | "author" | "chapters" | "quizzes" | "chaptersCount" | "schedule_at" | "closed_at"> {
  id: Partial<Course["id"]>;
  slug: Partial<Course["slug"]>;
  categories: number[];
}
interface ChapterForm extends Omit<Chapter, "id"> {
  id?: number;
  attachments: Attachment[];
}
export type DataTableHeader = {
  key: string;
  value?: SelectItemKey;
  title: string;
  colspan?: number;
  rowspan?: number;
  fixed?: boolean;
  align?: "start" | "end" | "center";
  width?: number;
  minWidth?: string;
  maxWidth?: string;
  sortable?: boolean;
  sort?: DataTableCompareFunction;
};

interface PaginationResponse<T> {
  data: T[];
  meta: PaginationMeta;
  links: { first: string; last: string; prev: string; next: string };
}
interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface VideoPlayerMessage {
  channel: string;
  video: string;
  event: "progress" | "ready" | "play" | "pause" | "timeupdate" | "seeking" | "seeked" | "ended" | "ratechange" | "enterfullscreen" | "exitfullscreen" | "captionsenabled" | "captionsdisabled" | "languagechange" | "volumechange" | "error" | "fullscreenchange";
  status: VideoPlayerVideoStatus;
}
export interface VideoPlayerVideoStatus {
  volume: number;
  muted: boolean;
  speed: number;
  currentTime: number;
  playing: boolean;
  paused: boolean;
  stopped: boolean;
  ended: boolean;
  buffered: number;
  duration: number;
  hasAudio: boolean;
  loop: boolean;
  ratio: string;
}

interface StudentAttempts {
  id: number;
  question: Question;
  answer: OutputData;
}

export type UsersWithAttempts = User & { attempts: StudentAttempts[] };
