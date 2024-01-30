import { MediaTypes } from "@/@core/enums";
import { Media } from "@/types";
import { ComponentOptions } from "vue";
import ImageType from "./ImageType.vue";
import PdfType from "./PdfType.vue";
import Preview from "./Preview.vue";
import VideoType from "./VideoType.vue";

interface Props {
  preview?: boolean;
  aspectRatio?: string;
  media: Media;
}

export default {
  props: {
    preview: { type: Boolean, default: false },
    deletable: { type: Boolean, default: false },
    media: { type: Object, required: true },
  },
  setup(props: Props, { attrs, slots }) {
    if (props.preview) return () => h(Preview, { ...props, ...attrs }, slots);
    switch (props.media.type) {
      case MediaTypes.video:
        return () => h(VideoType, { ...props, ...attrs }, slots);
      case MediaTypes.image:
        return () => h(ImageType, { ...props, ...attrs }, slots);
      case MediaTypes.pdf:
        return () => h(PdfType, { ...props, ...attrs }, slots);
      default:
        return () => h("dev", { ...props, ...attrs }, slots);
    }
  },
} as ComponentOptions<Props>;
