import React, { ReactNode } from 'react'

import { HeaderBar } from './TimeLineComponents/HeaderBar';
import { LowerBar } from './TimeLineComponents/LowerBar';

import Card from 'react-bootstrap/Card';


interface props {
  children: ReactNode;
  numberOfPages: number;
  handleFormSubmit: () => void;
}

export const TimeLine: React.FC<props> = (props) => {


  return (
    <>
      <Card>
        <Card.Body>
          <HeaderBar numberOfPages={props.numberOfPages}/>
        </Card.Body>
      </Card>
      {props.children}
      <Card>
        <Card.Body>
          <LowerBar numberOfPages={props.numberOfPages} handleFormSubmit={props.handleFormSubmit}/>
        </Card.Body>
      </Card>
    </>
  )
}
