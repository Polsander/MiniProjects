import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { TimelineStateInterface } from '../../../features/timeline/timelineSlice';
import { EntityInterface, resetEntityState } from '../../../features/entity/entitySlice';

import { TimeLine } from '../../TimeLine'
import { Form1 } from './Form1';
import { Form2 } from './Form2';
import { Form3 } from './Form3';

import { Card } from 'react-bootstrap';

export const Contact = () => {

  const dispatch = useDispatch();

  const timelineState = useSelector((state: TimelineStateInterface) => state.timeline);
  const entityState = useSelector((state:EntityInterface) => state.entity);

  const {step} = timelineState;

  const handleSubmit = () => {
    // here we handle how we want our form to get sent to the back-end.
    //Due to the TS configuration, we are not expecting to return any value.
    //Additionally, things like react thunk or saga may be implemented here to do async requests.

    //for now, we will only have it console log the data we've obtained and reset the entity state.
    console.log(entityState);
    dispatch(resetEntityState());
  }

  return (
    <div>
      <TimeLine numberOfPages={3} handleFormSubmit={handleSubmit}>
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
