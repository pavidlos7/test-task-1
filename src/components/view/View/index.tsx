import React from 'react';
import Info from './Info';
import KeyValue from './KeyValue';
import Name from './Name';
import { CharacterImage } from '../../common';

import type ICharacter from '../../../types/Character';

interface IViewProps {
  character: ICharacter
}

function View({ character }: IViewProps) {
  return (
    <>
      <Name>{character.name}</Name>
      <Info>
        <CharacterImage character={character} />
        <KeyValue
          target={{
            ...character,
            origin: character.origin.name,
            location: character.location.name,
            type: character.type || 'N/A',
          }}
          keys={[
            'name',
            'status',
            'species',
            'type',
            'gender',
            'origin',
            'location',
          ]}
        />
      </Info>
    </>
  );
}

export default View;
