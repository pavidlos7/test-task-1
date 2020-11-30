import _ from 'lodash';
import React from 'react';
import Dots from './Dots';
import Key from './Key';
import KeyValue from './KeyValue';
import Line from './Line';
import Value from './Value';

interface IKeyValueProps<T, K> {
  target: T,
  keys: K[]
}

function KeyValueWrapper
  <T extends {[key: string]: string}, K extends keyof T>({ target, keys }: IKeyValueProps<T, K>) {
  return (
    <KeyValue>
      {_.map(keys, (key: string) => (
        <Line key={key}>
          <Key>
            {_.capitalize(key)}
            :
          </Key>
          <Dots />
          <Value>{target[key]}</Value>
        </Line>
      ))}
    </KeyValue>
  );
}

export default KeyValueWrapper;
