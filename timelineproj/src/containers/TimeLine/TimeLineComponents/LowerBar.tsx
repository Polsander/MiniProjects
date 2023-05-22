import React from 'react'
import { Button } from 'react-bootstrap';

import styles from './LowerBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseStep, decreaseStep } from '../../../features/timeline/timelineSlice';
import { TimelineStateInterface } from '../../../features/timeline/timelineSlice';

interface LowerBarProps {
    numberOfPages: number
}

export const LowerBar: React.FC <LowerBarProps> = (props) => {

    const dispatch = useDispatch();
    const timelineState = useSelector((state: TimelineStateInterface) => state.timeline)
    const {step} = timelineState;


    const handlePrevious = () => {
        dispatch(decreaseStep())
    };

    const handleNext = () => {
        // need logic here to validate particular form we were on
        dispatch(increaseStep())
    }

    return (
        <div className='d-flex justify-content-center'>
            <span className='mx-3'>
                <Button onClick={handlePrevious} disabled={step === 1 ? true : false}>Previous</Button>
            </span>
            <span className='mx-3'>
                <Button onClick={handleNext} disabled={step === props.numberOfPages ? true : false}>Next</Button>
            </span>
            { step === props.numberOfPages ?
            <span className='mx-3'>
                <Button variant='success'>Submit</Button>
            </span>
            : null
            }
        </div>
    )
}
