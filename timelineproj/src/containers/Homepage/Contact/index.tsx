import React from 'react'
import { useSelector } from 'react-redux';
import { TimelineStateInterface } from '../../../features/timeline/timelineSlice';

import { TimeLine } from '../../TimeLine'
import { Form1 } from './Form1';
import { Form2 } from './Form2';
import { Form3 } from './Form3';

import { Card } from 'react-bootstrap';

export const Contact = () => {

  const timelineState = useSelector((state: TimelineStateInterface) => state.timeline);
  const {step} = timelineState;

  return (
    <div>
      <TimeLine numberOfPages={3}>
        <div className='my-5 py-5'>
          <Card className='py-5 px-5'>
            {step === 1 ? <Form1 /> : null}
            {step === 2 ? <Form2 /> : null}
            {step === 3 ? <Form3 /> : null}
          </Card>
        </div>
      </TimeLine>

    </div>
  )
}
