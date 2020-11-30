import styled from 'styled-components';
import constants from '../../../../constants';

export default styled.div`
  position: relative;

  & > *:first-child,
  & > *:last-child {
    position: absolute;
    background: ${constants.colors.background3};
    white-space: nowrap;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
