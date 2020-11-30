import styled from 'styled-components';
import inputStyle from './inputStyle';
import constants from '../../../constants';

export default styled.button.attrs({ type: 'button' })`
  ${inputStyle}
  transition: backgroun 0.15s linear;

  &:active,
  &:focus,
  &:hover {
    background: ${constants.colors.background3};
  }
`;
