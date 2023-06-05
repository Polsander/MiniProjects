import React, { SyntheticEvent, useEffect } from 'react';
import _ from 'lodash';

import styles from './HeaderBar.module.scss';

import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { TimelineStateInterface } from '../../../features/timeline/timelineSlice';
import { selectStep } from '../../../features/timeline/timelineSlice';

interface props {
    numberOfPages: number
}

export const HeaderBar: React.FC<props> = (props) => {

    const dispatch = useDispatch();
    const timelineState = useSelector((state: TimelineStateInterface) => state.timeline);
    const { currentIndex } = timelineState;

    const selectedClass = `${styles.headerIndex} ${styles.selected}`;

    const clickHandler = (e: SyntheticEvent, index: number) => {

        //here we can make some logic to ensure that the form gets validated first
        dispatch(selectStep(index));
        return
    }

    const renderSteps = () => {
        const steps: JSX.Element[] = [];
        for (let i = 0; i < props.numberOfPages; i++) {
            let line: JSX.Element = <span></span>;
            let classStyle = ''

            if (i < (props.numberOfPages - 1)) {
                line = <span className={styles.horizontal_divider}></span>
            }

            if (currentIndex === i + 1) {
                classStyle = selectedClass;
            } else {
                classStyle = `${styles.headerIndex}`;
            }
            steps.push(
                <div
                    key={i}
                    onClick={(event) => clickHandler(event, i + 1)}
                >
                    <span className={classStyle}>{i + 1}
                    </span>
                    {line}
                </div>)
        }
        return steps;
    }

    return (
        <>
            <Row className='justify-content-center'>
                <div className={styles.divided}>
                    {renderSteps()}
                </div>
            </Row>
        </>
    )
}
