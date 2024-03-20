import { MediaTypes } from "@/@core/enums";
import { ComponentOptions } from "vue";
import ImageType from "./ImageType.vue";
import PdfType from "./PdfType.vue";
import Preview from "./Preview.vue";
import VideoType from "./VideoType.vue";

interface Props {
    preview?: boolean;
    aspectRatio?: string;
    media: any;
}

export default {
    props: {
        preview: { type: Boolean, default: false },
        deletable: { type: Boolean, default: false },
        media: { type: Object, required: true },
    },
    mounted() {
        Object.assign(this, { ...this.$refs.elRef });
    },
    setup(props: Props, { attrs, slots }) {
        if (props.preview) return () => h(Preview, { ref: "elRef", ...props, ...attrs }, slots);
        switch (props.media.type) {
            case MediaTypes.image:
                // @ts-ignore
                return () => h(ImageType, { ref: "elRef", ...props, ...attrs }, slots);
            case MediaTypes.video:
                return () => h(VideoType, { ref: "elRef", ...props, ...attrs }, slots);
            case MediaTypes.pdf:
                return () => h(PdfType, { ref: "elRef", ...props, ...attrs }, slots);
            default:
                return () => h("dev", { ref: "elRef", ...props, ...attrs }, slots);
        }
    },
} as ComponentOptions<Props>;
