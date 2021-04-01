import { createClient, ContentfulClientApi } from "contentful"

export default class ContentfulService {
  client: ContentfulClientApi

  constructor(config: { space: string; accessToken: string }) {
    this.client = createClient({
      space: config.space,
      accessToken: config.accessToken,
    })
  }

  fetch(options: any) {
    return this.client.getEntries<any>(options)
  }
}
