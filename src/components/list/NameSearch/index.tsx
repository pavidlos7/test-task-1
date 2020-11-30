import _ from 'lodash';
import React from 'react';
import useEventListener from '@use-it/event-listener';
import Button from './Button';
import Input from './Input';
import NameSearch from './NameSearch';
import { useQuery } from '../../hooks';

interface INameSearchProps {
  queryKey: string
}

function NameSearchWrapper({ queryKey }: INameSearchProps) {
  const [query, replaceQuery] = useQuery();
  const value = query[queryKey] || '';

  const ref = React.useRef(null);

  useEventListener(
    'input',
    _.debounce(
      ({ target }) => {
        const { value: newValue } = target;

        replaceQuery({ ...newValue && { [queryKey]: newValue } });
      },
      350,
    ),
    ref.current,
  );

  const setValue = (newValue: string) => {
    if (ref.current) {
      ref.current.value = newValue;
    }
  };
  const handleReset = React.useCallback(
    () => {
      replaceQuery(_.omit(query, queryKey));
      setValue('');
    },
    [],
  );

  React.useEffect(
    () => {
      setValue(value);
    },
    [value],
  );

  return (
    <NameSearch>
      <Input type="text" ref={ref} placeholder="Start typing..." />
      <Button type="button" onClick={handleReset}>Reset</Button>
    </NameSearch>
  );
}

export default NameSearchWrapper;
