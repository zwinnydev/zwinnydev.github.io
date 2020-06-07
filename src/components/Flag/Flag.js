import React from 'react'
import styled from 'styled-components'
import ukFlag from './UK-flag.png'
import plFlag from './poland-flag.png'

const FlagImage = styled.img`
  padding-right: 0.5rem;
  padding-bottom: 0.2rem;
`

const flags = {
  "en": {src: ukFlag, alt: "English post"},
  "pl": {src: plFlag, alt: "Post po polsku"},
}

class Flag extends React.Component {
  render() {
    const { language } = this.props

    return <FlagImage {...flags[language || 'en']} className="flag" />
  }
}

export default Flag
