import React from "react"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph, Subheading, Title } from "../components/Typography"
import Image from "../components/Image"
import { PseudoButton } from "../components/FormElements"
import SocialLinks from "../components/SocialLinks"

export default function About(props: any) {
  return (
    <Root
      className="about-page page bg-black text-white"
      title="About | Friends of Notre Dame"
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
    >
      <div className="container mx-auto text-white py-6">
        <Block padding="none" className="md:flex">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <Image
              containerClassName="aspect-ratio aspect-ratio-1:1"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
              width={1650}
              height={1100}
            />
          </div>
          <div className="md:w-1/2 md:pl-8 lg:pl-32">
            <div>
              <Subheading>About</Subheading>
              <Paragraph.Base className="mb-6 mt-2">
                Ex culpa ad est deserunt ex aliqua est proident. Culpa dolore
                nisi magna anim velit amet anim ut voluptate. Aute ullamco ad
                sint ex irure adipisicing nostrud minim consequat fugiat aliquip
                ex excepteur. Ad reprehenderit esse nulla ad. Laborum esse velit
                reprehenderit ipsum aliquip laborum et non reprehenderit
                voluptate dolore veniam nulla.
              </Paragraph.Base>

              <Subheading>Contact</Subheading>
              <Paragraph.Base className="mb-6 mt-2">
                Minim commodo commodo
                <br />
                aliqua eu non ullamco
                <br />
                Elit deserunt esse aute non eu
                <br />
                Ad ut est laboris Lorem sint
                <br />
                fugiat ea fugiat consequat.
              </Paragraph.Base>
            </div>

            <Spacer className="mt-16 lg:mt-0" />

            <div className="flex flex-col flex-wrap items-end">
              <Subheading>Follow us</Subheading>

              <Spacer className="mt-2" />

              <SocialLinks alignment="right" />

              <Spacer />

              <PseudoButton href="#">Donate</PseudoButton>
            </div>
          </div>
        </Block>

        <Spacer className="mt-16" />
      </div>
    </Root>
  )
}
