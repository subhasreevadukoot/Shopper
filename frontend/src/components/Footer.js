import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Shopper</Col>
          <Col className='text-center py-3'>Built by learning from Traversy media- PluralSight course</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
