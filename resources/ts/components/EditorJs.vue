<template>
    <div ref="editorContainer" :id="id"></div>
</template>

<script lang="ts">
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import CodeTool from "@editorjs/code";
import Paragraph from "@editorjs/paragraph";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Checklist from "@editorjs/checklist";
import Marker from "@editorjs/marker";
import Warning from "@editorjs/warning";
import RawTool from "@editorjs/raw";
import Quote from "@editorjs/quote";
import InlineCode from "@editorjs/inline-code";
import Delimiter from "@editorjs/delimiter";
import SimpleImage from "@editorjs/simple-image";
import BookCoverToolfrom from "@editorjs/image";

import _ from "lodash";
import axiosIns from "@axios";

export default {
    props: { readOnly: Boolean, content: Object, id: { type: String, default: "editorjs" } },
    data() {
        return {
            editor: {} as EditorJS,
            config: {
                tools: {
                    header: {
                        class: Header,
                        config: {
                            placeholder: "Enter a header",
                            levels: [1, 2, 3, 4, 5, 6],
                            defaultLevel: 1,
                            inlineToolbar: true
                        }
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
                                        const res = await axiosIns.post("/media", formPost);
                                        return {
                                            success: 1,
                                            file: {
                                                url: res.data.url
                                            }
                                        };
                                    } catch (error) {
                                        throw error;
                                    }
                                },
                                async uploadByUrl(url: string) {
                                    console.log(url);
                                }
                            }
                        }
                    },
                    list: {
                        class: List,
                        inlineToolbar: true
                    },
                    code: {
                        class: CodeTool
                    },
                    paragraph: {
                        class: Paragraph,
                        inlineToolbar: true
                    },
                    embed: {
                        class: Embed,
                        config: {
                            services: {
                                youtube: true,
                                coub: true,
                                imgur: true,
                                vimeo: true
                            }
                        }
                    },
                    table: {
                        class: Table,
                        inlineToolbar: true,
                        config: {
                            rows: 2,
                            cols: 3
                        }
                    },
                    checklist: {
                        class: Checklist
                    },
                    Marker: {
                        class: Marker,
                        shortcut: "CMD+SHIFT+M"
                    },
                    warning: {
                        class: Warning,
                        inlineToolbar: true,
                        shortcut: "CMD+SHIFT+W",
                        config: {
                            titlePlaceholder: "Title",
                            messagePlaceholder: "Message"
                        }
                    },
                    raw: RawTool,
                    quote: {
                        class: Quote,
                        inlineToolbar: true,
                        shortcut: "CMD+SHIFT+O",
                        config: {
                            quotePlaceholder: "Enter a quote",
                            captionPlaceholder: "Quote's author"
                        }
                    },
                    inlineCode: {
                        class: InlineCode,
                        shortcut: "CMD+SHIFT+M"
                    },
                    delimiter: Delimiter
                }
            }
        };
    },
    unmounted() {
        this.editor.destroy();
    },
    mounted() {
        this.editor = new EditorJS({
            readOnly: this.readOnly,
            holder: this.id,
            ...this.config,
            minHeight: 210,
            placeholder: "Type Here",
            data: this.content as any,
            inlineToolbar: true,
            onChange: args => {
                this.$emit("change", this.editor);
            }
        });
    }
};
</script>

<style>
.ct {
    z-index: 99999999999;
}
</style>
