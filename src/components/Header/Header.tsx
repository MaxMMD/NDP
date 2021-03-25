import React, { useEffect, useState } from "react"
import cx from "classnames"
import Hamburger from "../Hamburger"
import NavItem from "../NavItem"
import "./Header.css"

export interface Props {
  className?: string
  fixed?: boolean
  navItems: Array<{ label: string; href: string; highlight?: boolean }>
}

function Header(props: Props) {
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false)
  const [isFaded, setIsFaded] = useState(false)

  const closeMobileMenu = () => setMobileMenuIsActive(false)

  useEffect(() => {
    if (typeof window === undefined) {
      return
    }

    function scrollListener() {
      if (window.scrollY > 10) {
        setIsFaded(true)
      } else {
        setIsFaded(false)
      }
    }

    window.addEventListener("scroll", scrollListener)
    ;() => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return (
    <header
      className={cx(
        "Header py-4 px-8 lg:px-0",
        {
          "fixed top-0 left-0 w-full z-10": !!props.fixed,
          "is-faded": isFaded,
        },
        props.className
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <ul className="Header__menu--home">
          <NavItem
            href="/"
            label="Home"
            onClick={closeMobileMenu}
            isHidden={isFaded}
            hideBorder={isFaded}
          />
        </ul>
        <div className="md:hidden -mt-2 -mr-4">
          <Hamburger
            color="white"
            animationStyle="spin"
            isActiveOnLoad={mobileMenuIsActive}
            onToggle={setMobileMenuIsActive}
          />
        </div>
        <ul
          className={cx(
            "Header__menu--mobile md:hidden absolute top-0 left-0 w-full px-8 pt-16 bg-black border-b pb-6 border-white border-opacity-10 z-30",
            {
              "Header__menu--mobile--inactive": !mobileMenuIsActive,
              "Header__menu--mobile--active": mobileMenuIsActive,
            }
          )}
        >
          {props.navItems.map((navItem, i) => (
            <NavItem
              key={i}
              {...navItem}
              onClick={closeMobileMenu}
              hideBorder
            />
          ))}
        </ul>
        <ul className="Header__menu--desktop hidden md:flex md:w-auto px-4 md:px-0 border-b md:border-none border-white border-opacity-10 z-50">
          {props.navItems.map((navItem, i) => (
            <NavItem
              key={i}
              className="ml-16"
              isHidden={!navItem.highlight && isFaded}
              hideBorder={isFaded}
              {...navItem}
            />
          ))}
        </ul>
      </div>
      <div
        className={cx(
          "container border-t border-l border-r border-white border-opacity-40 h-3 mx-auto overflow-hidden transition-all duration-400",
          {
            "opacity-0": isFaded,
          }
        )}
      />
    </header>
  )
}

export default Header
