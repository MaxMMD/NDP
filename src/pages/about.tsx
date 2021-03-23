import React from "react"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph, Title } from "../components/Typography"

export default function About(props: any) {
  return (
    <Root
      className="about-page page bg-black text-white"
      title="About | Friends of Notre Dame"
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
    >
      <div className="container mx-auto text-white py-6">
        <Block padding="narrow">
          <Title>About</Title>
          <Paragraph.Base>
            Nostrud ullamco proident sit incididunt est reprehenderit aliquip
            ullamco. Sint veniam laboris labore reprehenderit. Elit enim nulla
            amet sit. Veniam magna id qui et id et pariatur ullamco.
          </Paragraph.Base>
          <Paragraph.Base>
            Cupidatat ut ut magna fugiat nisi irure. Deserunt deserunt amet est
            quis magna adipisicing commodo eiusmod nulla nulla quis elit
            excepteur occaecat. Exercitation sit do occaecat consectetur ullamco
            laboris labore aliquip enim reprehenderit. Sit ea cillum irure et
            laboris labore reprehenderit do velit adipisicing nostrud sit eu
            labore. Nisi esse ea anim reprehenderit in nisi pariatur.
          </Paragraph.Base>
          <Paragraph.Base>
            Exercitation occaecat cillum fugiat cillum tempor proident esse do
            cillum dolor sunt dolore. Cupidatat culpa consectetur veniam ex
            magna reprehenderit mollit aliquip non amet tempor cupidatat
            commodo. Dolor dolore veniam labore ipsum ex adipisicing labore
            magna Lorem voluptate quis.
          </Paragraph.Base>
        </Block>

        <Spacer className="mt-16" />
      </div>
    </Root>
  )
}
