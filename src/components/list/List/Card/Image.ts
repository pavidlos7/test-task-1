import styled from 'styled-components';
import { CharacterImage } from '../../../common';

export default styled(CharacterImage)`
  transition: filter 0.15s linear;

  &:active,
  &:focus,
  &:hover {
    filter: brightness(0.75);
  }
`;
