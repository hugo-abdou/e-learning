'use strict'
import axiosIns from '@axios';

const getName = id => {
  return id
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export class SearchProvider {
  constructor(uppy, opts) {
    this.provider = opts.provider
    this.id = this.provider
    this.name = getName(this.id)
    this.pluginId = opts.pluginId
    this.hostname = opts.companionUrl
  }

  page = 1

  fileUrl(id) {
    return `${this.hostname}/search/${this.id}/get/${id}`
  }

  search(text, queries) {
    this.page++

    return axiosIns
      .create({})
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=di8Yd9vZQnHe6r3eTb9zIlEJumeenQWT&q=${encodeURIComponent(
          text,
        )}&limit=10${queries ? `&${queries}` : ''}`,
      )
      .then(res => ({
        searchedFor: text,
        username: null,
        nextPageQuery: `offset=${this.page}`,
        items: res.data.data.map(item => ({
          icon: item.images.fixed_height.url,
          name: item.title,
          mimeType: 'image/gif',
          id: item.id,
          thumbnail: item.images.fixed_height.url,
          full: item.images.fixed_height.url,
          requestPath: item.id,
          modifiedDate: item.trending_datetime,
          size: item.images.fixed_height.size,
        })),
      }))
  }
}
