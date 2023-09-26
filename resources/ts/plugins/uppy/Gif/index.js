/** @jsx h */
import { UIPlugin } from "@uppy/core";

import { SearchProvider } from "./GifSearchProvider";
import { SearchProviderViews } from "@uppy/provider-views";
import GifIcon from "./GifIcon";

/**
 * Unsplash
 *
 */
export default class GifSearch extends UIPlugin {
    static VERSION = "0.0.1";

    constructor(uppy, opts) {
        super(uppy, opts);
        this.id = this.opts.id || "GifSearch";
        this.title = this.opts.title || "Gif Search";
        this.type = "acquirer";

        this.icon = GifIcon;

        this.provider = new SearchProvider(uppy, {
            companionUrl: this.opts.companionUrl,
            companionHeaders: this.opts.companionHeaders,
            companionCookiesRule: this.opts.companionCookiesRule,
            provider: "gifSearch",
            pluginId: this.id,
        });
    }

    install() {
        this.view = new SearchProviderViews(this, {
            provider: this.provider,
            viewType: "grid",
        });

        const { target } = this.opts;
        if (target) {
            this.mount(target, this);
        }
    }

    onFirstRender() {}

    render(state) {
        return this.view.render(state);
    }

    uninstall() {
        this.unmount();
    }
}
