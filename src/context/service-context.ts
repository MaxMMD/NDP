import React from "react"

interface ServiceInterface<ServiceType = any> {
  client: ServiceType
  fetch<O = any, R = any>(options: O): Promise<R>
}

class DummyService implements ServiceInterface {
  configuration: any
  client: any

  constructor(configuration: any) {
    this.configuration = configuration

    // init the service
    this.client = {
      fetch: () => Promise.resolve(null),
    }
  }

  fetch(options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client.fetch().then((r: any) => {
        resolve(r)
      })
    })
  }
}

export const ServiceContext = React.createContext<ServiceInterface>(
  new DummyService({})
)
