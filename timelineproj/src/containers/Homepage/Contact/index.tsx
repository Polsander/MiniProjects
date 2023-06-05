import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { TimelineStateInterface, resetTimeline } from '../../../features/timeline/timelineSlice';
import { EntityInterface, resetEntityState } from '../../../features/entity/entitySlice';

import { TimeLine } from '../../TimeLine'
import { Form1 } from './Form1';
import { Form2 } from './Form2';
import { Form3 } from './Form3';

import { Card } from 'react-bootstrap';

interface ContactProps {
  validated: (bool: boolean) => void;
}

export const Contact: React.FC<ContactProps> = () => {

  const dispatch = useDispatch();

  const timelineState = useSelector((state: TimelineStateInterface) => state.timeline); // this may also require prop drilling reset (see if this carries over)
  const entityState = useSelector((state: EntityInterface) => state.entity);//if we want to use this as library, we need to prop drill this.

  const { currentIndex } = timelineState;

  useEffect(() => {
    dispatch(resetTimeline());
    dispatch(resetEntityState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validate = (bool: boolean) => {return bool};

  const formAttributes = [
    {
      step: 1,
      validated: (bool: boolean) => validate(bool),
      title: '',
    },
    {
      step: 1,
      validated: false,
      title: '',
    },
    {
      step: 1,
      validated: false,
      title: '',
    }
  ]

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
      <TimeLine
        numberOfPages={3}
        handleFormSubmit={handleSubmit}
        // formAttributes={formAttributes}
      >
        <div className='my-5 py-5'>
          <Card className='py-5 px-5'>
            {currentIndex === 1 ? <Form1 validated={formAttributes[0].validated} /> : null}
            {currentIndex === 2 ? <Form2 /> : null}
            {currentIndex === 3 ? <Form3 /> : null}
          </Card>
        </div>
      </TimeLine>

    </div>
  )
}
