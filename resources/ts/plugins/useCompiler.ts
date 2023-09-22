import "./mindrar-image";
import { ref } from "vue";
export default function () {
    const progress = ref(0);
    const loadImage = async (dataUrl: string) => {
        const img = new Image();
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = dataUrl;
        });
    };
    const compileFile = async (dataUrl: string) => {
        // @ts-ignore
        const compiler = new MINDAR.IMAGE.Compiler();
        const image = await loadImage(dataUrl);
        await compiler.compileImageTargets([image], (p: any) => {
            progress.value = p.toFixed(2);
        });
        const exportedBuffer = await compiler.exportData();
        progress.value = 0;
        return Promise.resolve(createMindFile(exportedBuffer));
    };
    const createMindFile = (buffer: ArrayBuffer) => {
        const blob = new Blob([buffer], { type: "application/octet-stream" });
        return new File([blob], "targets.mind", { type: blob.type });
    };

    return { compileFile, progress };
}
