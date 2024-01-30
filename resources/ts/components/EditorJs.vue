<template>
  <div
    style="--max-height: 100px"
    ref="editorEl"
    :id="holder"
    class="py-5"
  ></div>
</template>
<script setup lang="ts">
import Checklist from "@editorjs/checklist";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import EditorJS, { EditorConfig } from "@editorjs/editorjs";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import BookCoverToolfrom from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import RawTool from "@editorjs/raw";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import MathTex from "editorjs-math";
interface Props {}
const props = withDefaults(defineProps<EditorConfig & Props>(), {
  minHeight: 70,
  placeholder: "Type Here",
  inlineToolbar: true,
});

const emit = defineEmits<{ (e: "editorChange", val: EditorJS): void }>();

const editor = ref<EditorJS>();
const editorEl = ref<HTMLElement>();
const editorTools = {
  math: {
    class: MathTex,
  },
  header: {
    class: Header,
    config: {
      placeholder: props.placeholder || "Enter a header",
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 1,
      inlineToolbar: true,
    },
  },
  image: {
    class: BookCoverToolfrom,
    config: {
      uploader: {
        async uploadByFile(file: File) {
          const formPost = new FormData();
          formPost.append("file", file, file.name);
          // your own uploading logic here
          try {
            const res = await $api.post<{ url: string }>(
              "/media/upload",
              formPost
            );
            return {
              success: 1,
              file: {
                url: res.url,
              },
            };
          } catch (error) {
            throw error;
          }
        },
        async uploadByUrl(url: string) {
          console.log(url);
        },
      },
    },
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  code: {
    class: CodeTool,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        coub: true,
        imgur: true,
        vimeo: true,
      },
    },
  },
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  checklist: {
    class: Checklist,
  },
  Marker: {
    class: Marker,
    shortcut: "CMD+SHIFT+M",
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+W",
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  raw: RawTool,
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+O",
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  inlineCode: {
    class: InlineCode,
    shortcut: "CMD+SHIFT+M",
  },
  delimiter: Delimiter,
};
onMounted(() => {
  editor.value = new EditorJS({
    ...props,
    defaultBlock: props.defaultBlock || "header",
    tools: props.tools || editorTools,
    holder: props.holder || editorEl.value,
    onChange: (args) => {
      if (editor.value) emit("editorChange", editor.value);
    },
  });
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});

defineExpose({ editor, id: props.holder });
</script>

<style>
/* .ct {
  z-index: 99999999999;
} */
.ce-popover--opened {
  --max-height: 200px;
}
/* .ce-toolbox,
.ce-popover__overlay,
.ce-popover {
  z-index: 9999999999;
} */
.katex-display > .katex > .katex-html {
  overflow: visible !important;
  display: inline;
  border-bottom: 1px black;
}

.ce-Math,
.ce-toolbar__plus,
.ce-toolbar__settings-btn {
  color: rgba(
    var(--v-theme-on-background),
    var(--v-high-emphasis-opacity)
  ) !important;
}

.cdx-search-field__input {
  color: rgba(
    var(--v-theme-background),
    var(--v-high-emphasis-opacity)
  ) !important;
}

@media (hover: hover) {
  .ce-toolbar__settings-btn:hover,
  .ce-toolbar__plus:hover {
    color: rgba(
      var(--v-theme-background),
      var(--v-high-emphasis-opacity)
    ) !important;
  }
}
</style>
