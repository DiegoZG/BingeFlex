import React from 'react'
import jumboData from './fixtures/jumbo'
import Jumbotron from './components/jumbotron'

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.title> {item.title} </Jumbotron.title>
          <Jumbotron.subTitle> {item.subTitle} </Jumbotron.subTitle>
          <p> {item.image} </p>
          <p> {item.alt} </p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}


