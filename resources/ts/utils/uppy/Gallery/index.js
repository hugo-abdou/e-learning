/** @jsx h */
import { UIPlugin } from '@uppy/core'

import { Provider } from '@uppy/companion-client'
import { SearchProviderViews } from '@uppy/provider-views'
import { SearchProvider } from './SearchProvider'
import GifIcon from './GifIcon'

/**
 * Unsplash
 *
 */
export default class Gallery extends UIPlugin {
  static VERSION = '0.0.1'

  constructor(uppy, opts) {
    super(uppy, opts)
    this.id = this.opts.id || 'Gallery'
    this.title = this.opts.title || 'Gallery'
    this.type = 'acquirer'
    this.page = 1

    this.icon = GifIcon

    Provider.initPlugin(this, opts, {})

    this.provider = new SearchProvider(uppy, {
      companionUrl: this.opts.companionUrl,
      companionHeaders: this.opts.companionHeaders,
      companionCookiesRule: this.opts.companionCookiesRule,
      provider: 'gallery',
      pluginId: this.id,
    })
  }

  install() {
    this.view = new SearchProviderViews(this, {
      provider: this.provider,
      viewType: 'grid',
    })

    this.view.resetPluginState = this.resetPluginState.bind(this)

    const { target } = this.opts
    if (target)
      this.mount(target, this)
  }

  onFirstRender() {
    this.view.search('test')
  }

  render(state) {
    return this.view.render(state)
  }

  resetPluginState(e) {
    this.setPluginState({
      currentSelection: [],
      isInputMode: false,
    })
  }

  uninstall() {
    this.unmount()
  }
}
