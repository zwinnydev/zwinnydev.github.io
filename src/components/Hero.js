import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import { colors } from '../tokens'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: ${colors.text}
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 20%;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const HeroSubTitle = styled.h2`
  margin: 10px 20%;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const HeroContainerWithLogo = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 5% center, 95% center;
  background-color: ${colors.primary};
  background-size: 20%, 10%;
`
const Hero = props => {
  const { siteCoverLeft, siteCoverRight } = useSiteMetadata();
  const left = useSiteImages(siteCoverLeft);
  const right = useSiteImages(siteCoverRight);

  return props.heroImg ? (
    <HeroContainer style={{ backgroundImage: `url("${props.heroImg}")` }}>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
      </TitleContainer>
    </HeroContainer>
  ) : (
    <HeroContainerWithLogo style={{ backgroundImage: `url("${left.fixed.src}"), url("${right.fixed.src}")` }}>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
      </TitleContainer>
    </HeroContainerWithLogo>
  )
}

export default Hero
