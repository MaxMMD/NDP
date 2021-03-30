import { graphql, PageProps } from "gatsby"
import React, {
  //useContext,
  useEffect,
  useState,
} from "react"
import { shuffle } from "lodash"
import CardGrid from "../components/CardGrid"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph } from "../components/Typography"
import Select from "../components/Select"
import {
  ArtefactType,
  BasicPagePropsData,
  GalleryPagePropsData,
  // Node,
} from "../types"
import cardSorting from "../utils/card-sorting"
import Link from "../components/Link"
// import ContentfulServiceWrapper from "../components/ContentfulServiceWrapper"
// import { ServiceContext } from "../context/service-context"
// import ContentfulService from "../services/contentful-service"
// import { normaliseEntryToCard } from "../utils/card-normaliser"

export type ArtefactList = ArtefactType[]

function Gallery({
  data,
}: PageProps<GalleryPagePropsData & BasicPagePropsData>) {
  const cardData = data.allContentfulFriendsOfNotreDameArtefact.edges
  const [cards, setCards] = useState(cardData)
  const [sortMode, setSortMode] = useState("published-desc")

  //?: When sortMode changes, we might want to fetch fresh data from Contentful
  // const contentfulService: ContentfulService = useContext(ServiceContext)
  //
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     contentfulService
  //       .fetch({
  //         content_type: "friendsOfNotreDameArtefact",
  //       })
  //       .then(r => {
  //         const newCards = normaliseEntryToCard(r.items);
  //         setCards(newCards)
  //       })
  //   }
  // }, [sortMode])

  useEffect(() => {
    let newCards = []

    switch (sortMode) {
      case "alpha-asc": {
        newCards = cardData.sort(cardSorting.alphaAsc)
        break
      }
      case "alpha-desc": {
        newCards = cardData.sort(cardSorting.alphaDesc)
        break
      }
      case "featured-desc": {
        newCards = cardData.sort(cardSorting.featured)
        break
      }
      case "restored-desc": {
        newCards = cardData.sort(cardSorting.restored)
        break
      }
      case "random": {
        newCards = shuffle(cardData)
        break
      }
      default:
        newCards = cardData
    }

    setCards(newCards)
  }, [sortMode])

  function handleOnChange(e: any) {
    setSortMode(e.target.value)
  }

  return (
    <Root
      className="gallery-page page bg-black text-white"
      title={`Gallery | ${data.site.siteMetadata.title}`}
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
      showFrame
    >
      <div className="container mx-auto text-white py-6">
        <Block>
          <Paragraph.Base className="lg:w-1/2">
            This gallery allows you to track the restoration progress of each
            artifact within the Notre-Dame Cathedral. Click through to learn
            more about each artifact and to make a donation.
          </Paragraph.Base>
          <Paragraph.Base className="lg:w-1/2">
            If you’d rather make a general donation to the restoration,{" "}
            <Link href="#">click here</Link>.
          </Paragraph.Base>
        </Block>

        <Spacer className="mt-6 lg:mt-12" />

        <Block>
          <div className="lg:w-1/5">
            <Select
              onChange={handleOnChange}
              options={[
                { label: "Sort", value: "published-desc" },
                { label: "Featured", value: "featured-desc" },
                { label: "A - Z", value: "alpha-asc" },
                { label: "Restored %", value: "restored-desc" },
              ]}
            />
          </div>
        </Block>

        <Spacer />

        {[sortMode].map(key => (
          <Block key={key}>
            <CardGrid items={cards} />
          </Block>
        ))}

        <Spacer />
      </div>
    </Root>
  )
}

export default Gallery

//?: Use the service wrapper to fetch data client-side from Contentful
// export default function GalleryWrapper(
//   props: PageProps<GalleryPagePropsData & BasicPagePropsData>
// ) {
//   return (
//     <ContentfulServiceWrapper
//       spaceId={process.env.GATSBY_CONTENTFUL_SPACE_ID}
//       accessToken={process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}
//     >
//       <Gallery {...props} />
//     </ContentfulServiceWrapper>
//   )
// }

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulFriendsOfNotreDameArtefact(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: featured, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id
          restorationProgress
          restorationComplete
          featured
          images {
            resize(height: 488, width: 610) {
              width
              height
              src
            }
          }
        }
      }
    }
    contentfulFriendsOfNotreDamePage(
      pageName: { eq: "Gallery" }
      node_locale: { eq: "en-US" }
    ) {
      pageTitle
      introduction {
        childMdx {
          body
        }
      }
    }
  }
`
