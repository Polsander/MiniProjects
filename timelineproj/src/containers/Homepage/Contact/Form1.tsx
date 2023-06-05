import React, { SyntheticEvent, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { produce } from 'immer';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { updateEntityState } from '../../../features/entity/entitySlice';
import { EntityInterface } from '../../../features/entity/entitySlice';

interface Form1Props {
  validated: boolean | ((bool: boolean) => void);
}


export const Form1: React.FC<Form1Props> = (props) => {

  const keyPaths = {
    entity: 'entity',
    attributes: 'entity.attributes',
    firstPage: 'entity.attributes.firstPage',
    field1: 'entity.attributes.firstPage.field1',
    field2: 'entity.attributes.firstPage.field2',
    field3: 'entity.attributes.firstPage.field3',
  };

  const [fieldErrors, setFieldErrors] = useState([{ message: '', valid: false }, { message: '', valid: false }, { message: '', valid: false }])

  const entityState = useSelector((state: EntityInterface) => state.entity)
  const dispatch = useDispatch();

  useEffect(() => {
    const allValid = _.every(fieldErrors, (obj) => Boolean(obj.valid));
    if ((typeof props.validated === 'function')) {
      if (allValid) {
        props.validated(true);
        return
      } else {
        props.validated(false);
        return
      }
    }
  }, [fieldErrors, props]);

  const handleValidation = (event: any, index: number) => {
    if (event.target.value) {
      setFieldErrors((prevFieldErrors: { message: string; valid: boolean }[]) => {
        return produce(prevFieldErrors, (draft) => {
          const object = draft[index];
          object.message = '';
          object.valid = true;
        })
      });
    } else {
      setFieldErrors((prevFieldErrors: { message: string; valid: boolean }[]) => {
        return produce(prevFieldErrors, (draft) => {
          const object = draft[index];
          object.message = 'This field is required';
          object.valid = false;
        })
      });
    }
  }

  const dataHandler = (e: SyntheticEvent, path: string) => {
    const target = e.target as HTMLTextAreaElement
    dispatch(updateEntityState({ path, data: target.value }));
  }

  const getExistingInput = (path: string) => {
    const value: string = _.get(entityState, path, '');
    return value;
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Field 1</Form.Label>
        <Form.Control
          type='input'
          placeholder='Field 1'
          value={getExistingInput(keyPaths.field1)}
          onChange={(event) => dataHandler(event, keyPaths.field1)}
          onBlur={(event) => handleValidation(event, 0)}
        />
        {!(fieldErrors[0].valid) ? fieldErrors[0].message : null}
      </Form.Group>
      <Form.Group>
        <Form.Label>Field 2</Form.Label>
        <Form.Control
          type='input'
          placeholder='Field 1'
          value={getExistingInput(keyPaths.field2)}
          onChange={(event) => dataHandler(event, keyPaths.field2)}
          onBlur={(event) => handleValidation(event, 1)}
        />
        {!(fieldErrors[1].valid) ? fieldErrors[1].message : null}
      </Form.Group>
      <Form.Group>
        <Form.Label>Field 3</Form.Label>
        <Form.Control
          type='input'
          placeholder='Field 1'
          value={getExistingInput(keyPaths.field3)}
          onChange={(event) => dataHandler(event, keyPaths.field3)}
          onBlur={(event) => handleValidation(event, 2)}
        />
        {!(fieldErrors[2].valid) ? fieldErrors[2].message : null}
      </Form.Group>
    </Form>
  )
}
