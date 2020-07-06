import React, { useEffect } from 'react'
import styled from 'styled-components'
import AudioPackages from '../Components/AudioPackages'

const Audio = (props) => {
  useEffect(() => {
    if (window.innerWidth >= 992) { window.scrollTo({ top: 460, left: 0, behavior: 'smooth' }) }
  }, [])
  return (
    <Wrapper>
      <AudioPackages />
    </Wrapper>
  )
}

const Wrapper = styled.div`
	background: #fff600;
	z-index: 300;
	padding-top: 60px;
`

export default Audio
