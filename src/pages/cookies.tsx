import React from "react"
import cx from "classnames"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Paragraph, Title, Heading, Subheading } from "../components/Typography"
import CookieBanner from "../components/UCMCookieBanner"
import MetaTags from "../components/MetaTags"

const ParagraphWithMargin = ({ className, ...props }: any) => (
  <Paragraph.Base className={cx(className, "my-12")} {...props} />
)

export default function CookiePage() {
  return (
    <div className="cookie-page page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cookies</title>
        <meta
          name="description"
          content="Aliqua ut veniam duis voluptate ex do laborum aliquip do laborum. Aliquip eiusmod deserunt pariatur minim ea esse incididunt."
        />
      </Helmet>
      <MetaTags />
      <div className="container mx-auto bg-app-placeholder px-4 md:px-0 pt-20 overflow-hidden">
        <Header
          className="px-4 md:px-0"
          navItems={[{ label: "Home", href: "/" }]}
          fixed
        />
        <section className="py-12 md:py-16 mx-auto max-w-prose">
          <Title>Cookies Policy</Title>
          <ParagraphWithMargin>
            When you visit our website, or use any of the tools hosted on{" "}
            <strong>ekino.app</strong> or any of its subdomains (e.g.{" "}
            <strong>cf.ekino.app</strong>), some cookies or other tracking
            technologies may be stored on your device (computer, tablet or
            smartphone).
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            This Cookie Policy contains information on what cookies are, the
            type of cookies used by HAVAS S.A on the website 
            <strong>ekino.app</strong> and the purpose of such use, and your
            choices regarding cookies.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            This Cookie Policy should be read together with the 
            <a href="https://ekino.co.uk/data-protection-policy">
              Havas Data Protection Policy
            </a>
             and <a href="https://ekino.co.uk/terms-of-use">Terms of Use</a>.
            The same policies and terms of use are in effect on all websites and
            services hosted on <strong>ekino.app</strong> and any subdomains
            (e.g. <strong>cf.ekino.app</strong>).
          </ParagraphWithMargin>
          <Heading id="what-are-cookies-and-other-tracking-technologies-">
            What are cookies and other tracking technologies?
          </Heading>
          <ParagraphWithMargin>
            Cookies are small text files which contain an amount of data
            generated when you browse on a website and installed in your
            internet browser. The other tracking technologies, such as web
            beacons, pixels or clear gifs, work similarly to cookies.{" "}
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            Cookies and other tracking technologies are used to monitor your
            activity on a website by enabling us (through first party cookies)
            or thirds (through third party cookies) to collect information about
            how you use the website and enhance the way it works and your visit
            on our website.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            There are two types of cookies: session cookies and persistent
            cookies.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            <ul>
              <li>
                Session cookies are temporary and therefore automatically
                deleted from your device every time you close your browser;
              </li>
              <li>
                Persistent cookies remain on your device for a period of time
                specified in the cookie and are activated every time you visit
                the website which installed it.
              </li>
            </ul>
          </ParagraphWithMargin>
          <Heading id="your-choice-regarding-cookies">
            Your choice regarding cookies
          </Heading>
          <ParagraphWithMargin>
            You have a number of options to control or limit how we or third
            parties use cookies:
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            <ul>
              <li>
                You can choose to delete all or some cookies from your device
                through your browser settings;
              </li>
              <li>
                You can choose to prevent cookies from being installed on your
                device through your browser settings;
              </li>
              <li>
                You can enable or disable cookies we use on our website by
                clicking the “Manage Preferences” option on the cookie
                notification banner.
              </li>
            </ul>
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            To learn more on how to manage cookies usage from your browser,
            please follow the following links for each browser:{" "}
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            <ul>
              <li>
                <a href="https://support.microsoft.com/en-gb/help/278835/how-to-delete-cookie-files-in-internet-explorer">
                  Internet Explorer
                </a>
              </li>
              <li>
                <a href="https://support.google.com/chrome/answer/95647?hl=en&amp;p=cpn_cookies">
                  Chrome
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/en-gb/guide/safari/welcome/mac">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://help.opera.com/en/latest/web-preferences/#cookies">
                  Opera
                </a>
              </li>
            </ul>
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            Please note that if you choose to block or de-activate some or all
            cookies we use, our website might not work properly, and you might
            not be able to enjoy all of the services and functionalities
            provided through the use of cookies.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            If you want to learn more about cookies and how to manage them,
            please visit the following websites: 
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            <ul>
              <li>
                <a href="http://www.youronlinechoices.eu/">
                  www.youronlinechoices.eu
                </a>
              </li>
              <li>
                <a href="http://www.allaboutcookies.org/">
                  www.allaboutcookies.org
                </a>
              </li>
            </ul>
          </ParagraphWithMargin>
          <Heading id="types-of-cookies-used-on-this-website">
            Types of cookies used on this website
          </Heading>
          <Subheading id="strictly-necessary-cookies">
            Strictly Necessary Cookies
          </Subheading>
          <ParagraphWithMargin>
            These cookies are necessary for the website to function and cannot
            be switched off in our systems. They are usually only set in
            response to actions made by you which amount to a request for
            services, such as setting your privacy preferences, logging in or
            filling in forms.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            You can set your browser to block or alert you about these cookies,
            but some parts of the site will not then work. These cookies do not
            store any personally identifiable information.
          </ParagraphWithMargin>
          <ParagraphWithMargin>Cookies used:</ParagraphWithMargin>
          <ParagraphWithMargin>
            <ul>
              <li>No applicable cookies in this category</li>
            </ul>
          </ParagraphWithMargin>

          <Subheading id="performance-cookies">Performance Cookies</Subheading>
          <ParagraphWithMargin>
            These cookies allow us to count visits and traffic sources so we can
            measure and improve the performance of our site. They help us to
            know which pages are the most and least popular and see how visitors
            move around the site.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            All information these cookies collect is aggregated and therefore
            anonymous. If you do not allow these cookies we will not know when
            you have visited our site, and will not be able to monitor its
            performance.
          </ParagraphWithMargin>
          <ParagraphWithMargin>Cookies used:</ParagraphWithMargin>
          <ParagraphWithMargin>
            <ul>
              <li>_ga</li>
              <li>_gat</li>
              <li>_gid</li>
            </ul>
          </ParagraphWithMargin>

          <Subheading id="functional-cookies">Functional Cookies</Subheading>
          <ParagraphWithMargin>
            These cookies enable the website to provide enhanced functionality
            and personalisation. They may be set by us or by third party
            providers whose services we have added to our pages.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            If you do not allow these cookies then some or all of these services
            may not function properly.
          </ParagraphWithMargin>
          <ParagraphWithMargin>Cookies used:</ParagraphWithMargin>
          <ParagraphWithMargin>
            <ul>
              <li>gtm_cookie_consent</li>
              <li>io</li>
            </ul>
          </ParagraphWithMargin>
          <Subheading id="targeting-cookies">Targeting Cookies</Subheading>
          <ParagraphWithMargin>
            These cookies may be set through our site by our advertising
            partners. They may be used by those companies to build a profile of
            your interests and show you relevant adverts on other sites.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            They do not store directly personal information, but are based on
            uniquely identifying your browser and internet device. If you do not
            allow these cookies, you will experience less targeted advertising.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            <ul>
              <li>No applicable cookies in this category</li>
            </ul>
          </ParagraphWithMargin>

          <Subheading id="third-party-cookies-">
            Third-Party Cookies 
          </Subheading>
          <ParagraphWithMargin>
            In some cases, we use third parties to manage our cookies.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            Third parties may also use their own cookies or other tracking
            technologies to collect information about your activity on the
            website, in particular to provide you with personalised
            advertisements on their own websites
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            Some social network cookies might also be installed on your device
            to allow you to interact on social networks, such as Facebook or
            Twitter.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            We are in no way involved on the implementation and functioning of
            such cookies and have no access or control overs such third-party
            cookies. These cookies are subject to their own cookie policies,
            which are accessible on each third-party website and to which we
            invite you to refer to.
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            We are therefore not responsible for the data collected by these
            cookies and cannot provide you with further information regarding
            the nature of information collected by these third-party cookies.
          </ParagraphWithMargin>
          <Heading id="contact-us-">Contact Us </Heading>
          <ParagraphWithMargin>
            If you have any question, comment or concern regarding this Cookie
            Policy and the way Ekino uses cookies and other tracking
            technologies, please contact us at:{" "}
            <a href="mailto:contact@ekino.co.uk">contact@ekino.co.uk</a>
          </ParagraphWithMargin>
          <ParagraphWithMargin>
            Or send us an email: 
            <a href="mailto:Data.protectionuk@havas.com">
              Data.protectionuk@havas.com
            </a>
          </ParagraphWithMargin>
        </section>
        <Footer />
      </div>
      <CookieBanner />
    </div>
  )
}
