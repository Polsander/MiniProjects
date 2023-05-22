import React, {SyntheticEvent} from 'react'

import { Form } from 'react-bootstrap';

import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { updateEntityState } from '../../../features/entity/entitySlice';
import { EntityInterface } from '../../../features/entity/entitySlice';

export const Form3 = () => {

  const keyPaths = {
    entity: 'entity',
    attributes: 'entity.attributes',
    thirdPage: 'entity.attributes.thirdPage',
    field1: 'entity.attributes.thirdPage.field1',
    field2: 'entity.attributes.thirdPage.field2',
    field3: 'entity.attributes.thirdPage.field3',
  };

  const entityState = useSelector((state:EntityInterface) => state.entity)
  const dispatch = useDispatch();

  const dataHandler = (e:SyntheticEvent, path:string) => {
    const target = e.target as HTMLTextAreaElement
    dispatch(updateEntityState({path, data: target.value}));
  }

  const getExistingInput = (path: string) => {
    const value: string = _.get(entityState, path, '');
    return value;
  }

  return (
    <Form>
        <Form.Group>
            <Form.Label>Field 1 - page 3</Form.Label>
            <Form.Control type='input' placeholder='Field 1' value={getExistingInput(keyPaths.field1)} onChange={(event) => dataHandler(event, keyPaths.field1)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Field 2 - page 3</Form.Label>
            <Form.Control type='input' placeholder='Field 1' value={getExistingInput(keyPaths.field2)} onChange={(event) => dataHandler(event, keyPaths.field2)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Field 3 - page 3</Form.Label>
            <Form.Control type='input' placeholder='Field 1' value={getExistingInput(keyPaths.field3)} onChange={(event) => dataHandler(event, keyPaths.field3)}/>
        </Form.Group>
    </Form>
  )
}
