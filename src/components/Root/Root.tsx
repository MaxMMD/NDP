import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Helmet } from "react-helmet"
import Footer from "../Footer"
import Header from "../Header"
import MetaTags from "../MetaTags"
import { Spacer } from "../Layout"
import { GlobalDOMContextProvider } from "../GlobalDOMContext/GlobalDOMContext"
import Modal from "../Modal"
import Frame from "../Frame"
import { Paragraph } from "../Typography"
import Link from "../Link"

interface Props {
  className?: string
  title: string
  description?: string
  image?: string
  children: JSX.Element | JSX.Element[]
  showFrame?: boolean
}

const DEFAULT_IMG_SRC = "/images/FNDP_Google_Preview-02.png"

function Root(props: Props) {
  return (
    <GlobalDOMContextProvider>
      <div className={props.className}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{props.title}</title>
          <meta name="description" content={props.description} />
          <meta property="og:title" content={props.title} />
          <meta property="og:description" content={props.description} />
          <meta property="og:image" content={props.image || DEFAULT_IMG_SRC} />
        </Helmet>
        <MetaTags />
        <Header
          fixed
          navItems={[
            { href: "/gallery", label: "Gallery" },
            // { href: "/our-progress", label: "Progress" },
            { href: "/about", label: "About" },
            { href: "/donate", label: "Donate", highlight: true },
          ]}
        />
        <Spacer className="mt-32" />
        <MDXProvider components={{ p: Paragraph.Base, a: Link }}>
          <main>{props.children}</main>
        </MDXProvider>
        <Footer />
        {props.showFrame ? <Frame /> : null}
        <Modal />
      </div>
    </GlobalDOMContextProvider>
  )
}

export default Root
