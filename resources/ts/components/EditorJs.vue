<template>
  <div style="--max-height: 100px" ref="editorEl" :id="holder"></div>
</template>
<script setup lang="ts">
import { $resumable } from "@/utils/resumable";
import { ResumableFile } from "@/utils/uppy/ResumableTypes";
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
        uploadByFile(file: File) {
          return new Promise((resolve, reject) => {
            $resumable.addFile(file);
            $resumable.on("fileAdded", (file: ResumableFile) => {
              $resumable.upload();
            });
            $resumable.on(
              "fileSuccess",
              (file: ResumableFile, message: string) => {
                if (message !== "Ok") {
                  const res = JSON.parse(message);
                  resolve({ success: 1, file: { url: res.url } });
                }
              }
            );
          });
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
  if (editor.value) editor.value?.destroy();
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
    background-color: rgba(
      var(--v-theme-surface),
      var(--v-high-emphasis-opacity)
    ) !important;
  }
}
</style>
