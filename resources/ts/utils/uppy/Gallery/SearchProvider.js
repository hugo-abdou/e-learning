'use strict'

import axios from '@axios'

const getName = id => {
  return id
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export class SearchProvider {
  constructor(uppy, opts) {
    this.allowedFileTypes = uppy.opts.restrictions.allowedFileTypes || []
    this.provider = opts.provider
    this.id = this.provider
    this.name = getName(this.id)
    this.pluginId = opts.pluginId
    this.companionUrl = opts.companionUrl
    this.companionHeaders = opts.companionHeaders
  }

  page = 1

  fileUrl(id) {
    return `${window.location.origin}/media/${id}`
  }

  search(text, queries) {
    this.page++

    return axios
      .get(
        `${this.companionUrl}?mediaType=${this.allowedFileTypes.join(',')}&q=${encodeURIComponent(text)}${
          queries ? `&${queries}` : ''
        }`,
      )
      .then(res => ({
        searchedFor: text,
        username: null,
        nextPageQuery: `page=${this.page}`,
        items: res.data.data.map(item => ({
          icon: item.thumb_url,
          name: item.name,
          mimeType: item.mime_type,
          id: item.id,
          thumbnail: item.thumb_url,
          full: item.thumb_url,
          requestPath: item.id,
          modifiedDate: new Date(),

          // size: item.images.fixed_height.size
        })),
      }))
  }
}
