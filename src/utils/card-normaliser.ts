import { Entry } from "contentful"
import { ArtefactType, Node } from "../types"

export function normaliseEntryToCard(items: Entry<any>[]) {
  const cards: Node<ArtefactType>[] = items.map(i => ({
    node: {
      ...i.fields,
      images:
        i.fields.images?.map((img: any) => ({
          resize: {
            width: 610,
            height: 488,
            src: `https:${img.fields.file.url}?w=610&h=488&q=50&fit=fill`,
          },
        })) || [],
    },
  }))

  return cards
}
