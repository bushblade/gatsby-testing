import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 0;
  img {
    margin-bottom: 0;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  padding: 0.5rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img style={{ width: 100 }} src={logo} alt="Level Up Tutorials" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
