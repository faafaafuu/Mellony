import React from 'react'
import { Container, Image, Card} from 'semantic-ui-react'
import './Home.scss'

const src = '/images/wireframe/white-image.png'

const Home = () => (
  <div>
  <Container className="mainImg">
    <Container className="hero_inner">
        <Image className="img"
            as='a'
            href='http://google.com'
            target='_blank'
            centered
        />
    </Container>
  </Container>
   
  <Container className="cardsGroup">
    <Card.Group itemsPerRow={4}>
      <Card color='red' image={src} />
      <Card color='orange' image={src} />
      <Card color='yellow' image={src} />
      <Card color='olive' image={src} />
      <Card color='green' image={src} />
      <Card color='teal' image={src} />
      <Card color='blue' image={src} />
      <Card color='violet' image={src} />
    </Card.Group>
  </Container>
</div>
)

export default Home