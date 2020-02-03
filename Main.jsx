import React, { useRef } from 'react'
import styled from 'styled-components'
import Dropdown from '../components/ui/Dropdown.jsx'

const Root = styled.main`
  ${({ theme }) => theme.mediaQueries.layout} {
    margin-right: ${({ theme }) =>
      `calc(100vh - ${theme.layout.header.height} - ${theme.layout.navbar.size}) `};
    margin-left: 0;
  }
  height: ${({ theme }) => `calc(100vh - ${theme.layout.header.height}) `};
  margin-left: ${({ theme }) => theme.layout.navbar.size};
  overflow-y: auto;
`

const Main = ({ children }) => {
  const mainRef = useRef()
  return (
    <Root ref={mainRef}>
      <Dropdown parentRef={mainRef} />
      {children}
    </Root>
  )
}

export default Main
