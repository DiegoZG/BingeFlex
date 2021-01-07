import React from 'react'
import jumboData from './fixtures/jumbo'
import Jumbotron from './components/jumbotron'

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane> 
           <Jumbotron.title> {item.title} </Jumbotron.title>
           <Jumbotron.subTitle> {item.subTitle} </Jumbotron.subTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane> 
           <Jumbotron.Image src={item.image} alt={item.alt}/> 
          </Jumbotron.Pane> 
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}


