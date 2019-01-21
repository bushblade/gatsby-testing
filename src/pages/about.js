import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Toggle from '../components/toggle'

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props => (props.primary ? '#524763' : '#1ca086')};
  color: white;
  outline: none;
  border: none;
  padding: 0.2rem 1rem;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: -1px 3px 10px 5px rgba(0, 0, 0, 0.2);
  }
`

const About = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
        possimus. Est facilis tempora, eveniet expedita totam fugit itaque,
        veniam officiis debitis voluptate repellat maxime minus tenetur
        doloribus non inventore iure, sunt recusandae voluptates mollitia soluta
        necessitatibus ducimus? Atque totam blanditiis deserunt, delectus,
        dignissimos voluptates, rem tempore non quasi amet cupiditate
        necessitatibus magni ducimus eius! Autem minima eveniet, et possimus
        error ipsa, ipsum eum ullam molestias veritatis necessitatibus eos
        consectetur voluptatibus explicabo deserunt, omnis earum? Aspernatur, in
        molestias! Officia possimus in repudiandae ducimus facere sed. Amet
        harum unde facilis expedita, quos repellat! Eligendi officia nam
        exercitationem reprehenderit nisi maxime doloremque ut.
      </p>
    </div>
    <Toggle>
      {({ open, toggle }) => (
        <>
          {open && <h1>Hide or Show</h1>}
          <Button primary onClick={toggle}>
            Toggle
          </Button>
        </>
      )}
    </Toggle>
  </Layout>
)

export default About
