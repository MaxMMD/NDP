import React from "react"
import { ServiceContext } from "../../context/service-context"
import ContentfulService from "../../services/contentful-service"

export interface Props {
  spaceId: string | undefined
  accessToken: string | undefined
  children: JSX.Element | JSX.Element[]
}

function ContentfulServiceWrapper(props: Props) {
  if (!props.spaceId || !props.accessToken) {
    return <>props.children</>
  }

  const contentfulService = new ContentfulService({
    space: props.spaceId,
    accessToken: props.accessToken,
  })

  return (
    <ServiceContext.Provider value={contentfulService as any}>
      {props.children}
    </ServiceContext.Provider>
  )
}

export default ContentfulServiceWrapper
