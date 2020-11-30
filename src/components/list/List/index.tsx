import _ from 'lodash';
import React from 'react';
import Card from './Card';
import List from './List';

import type ICharacter from '../../../types/Character';

interface IListProps {
  characters: Array<ICharacter>
}

function ListWrapper({ characters }: IListProps) {
  return (
    <List>
      {_.map(characters, (character) => (
        <Card key={character.id} character={character} />
      ))}
    </List>
  );
}

export default ListWrapper;
