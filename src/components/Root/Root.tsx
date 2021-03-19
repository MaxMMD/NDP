import React from "react"
import { Helmet } from "react-helmet"
import CampaignWrapper from "../CampaignWrapper"
import Footer from "../Footer"
import Header from "../Header"
import MetaTags from "../MetaTags"
import Spacer from "../Spacer"
import CookieBanner from "../UCMCookieBanner"

interface Props {
  className?: string
  title: string
  description?: string
  children: JSX.Element | JSX.Element[]
}

function Root(props: Props) {
  return (
    <CampaignWrapper>
      <div className={props.className}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{props.title}</title>
          <meta name="description" content={props.description} />
        </Helmet>
        <MetaTags />
        <Header
          fixed
          navItems={[
            { href: "/gallery", label: "Gallery" },
            { href: "/about", label: "About" },
            { href: "/donate", label: "Donate", highlight: true },
          ]}
        />
        <Spacer className="mt-32" />
        <main>{props.children}</main>
        <Footer />
        <CookieBanner />
      </div>
    </CampaignWrapper>
  )
}

export default Root
