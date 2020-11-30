import React from 'react';
import Card from './Card';
import Image from './Image';
import Caption from './Caption';

import type ICharacter from '../../../../types/Character';

interface ICardProps {
  character: ICharacter
}

function CardWrapper({ character }: ICardProps) {
  const { id, name } = character;

  return (
    <Card to={`/characters/${id}`}>
      <Image character={character} />
      <Caption>{name}</Caption>
    </Card>
  );
}

export default CardWrapper;
