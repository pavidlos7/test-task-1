import React from 'react';
import constants from '../../constants';

import type ICharacter from '../../types/Character';

interface ICharacterImageProps {
  character: ICharacter,
  className?: string | undefined
}

function CharacterImage({ character, className }: ICharacterImageProps) {
  const { name, image } = character;

  return (
    <img
      src={image}
      alt={name}
      width={`${constants.cardImage.width}px`}
      height={`${constants.cardImage.height}px`}
      className={className}
    />
  );
}

CharacterImage.defaultProps = {
  className: undefined,
};

export default CharacterImage;
