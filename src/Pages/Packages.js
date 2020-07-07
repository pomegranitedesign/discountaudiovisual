import React, { useEffect } from 'react'
import styled from 'styled-components'
import PackageList from '../Components/PackageList'

const Packages = (props) => {
  useEffect(() => {
    if (window.innerWidth >= 992) { window.scrollTo({ top: 600, behavior: 'smooth' }) }
  }, [])
  return (
    <Wrapper>
      <PackageList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
	background: #fff600;
	z-index: 300;
	padding-top: 60px;
`

export default Packages
