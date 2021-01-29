import React from "react"
import Link from "next/link"

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign In", href: `/auth/signin` },
    !currentUser && { label: "Sign Up", href: `/auth/signup` },
    currentUser && { label: "Sign Out", href: `/signout` }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <Link href={href}>
          <a className="nav-link">{label}</a>
        </Link>
      )
    })

  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Tick8</a>
      </Link>

      <div className="d-flex juxtify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  )
}

export default Header
