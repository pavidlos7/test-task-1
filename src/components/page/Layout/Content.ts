import styled from 'styled-components';
import constants from '../../../constants';

export default styled.div`
  min-height: calc(100vh - ${constants.heights.header}px);
  background: ${constants.colors.background1};
`;
