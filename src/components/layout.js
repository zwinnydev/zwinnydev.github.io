import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import 'prismjs/themes/prism-tomorrow.css'
import { GlobalStyle } from './Commons'
import { media } from '../tokens'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFeatherAlt, faAddressCard  } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faLinkedin, faFeatherAlt, faAddressCard, faGithub, faYoutube)

const SiteContent = styled.div`
  margin: 0 0;

  @media ${media.medium} {
    margin: 60px 0;
  }
`

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap"
          rel="stylesheet"/>
        </Helmet>
        <GlobalStyle />
        <Header />
        <SiteContent>{children}</SiteContent>
        <Footer />
      </>
    )
  }
}

export default Template
