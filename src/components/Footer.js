import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-black-ter">
        <div className="content has-text-centered">
          <p><a href="https://www.kieranpbrown.co.uk">© 2020 Kieran Brown</a></p>
        </div>
      </footer>
    )
  }
}

export default Footer
