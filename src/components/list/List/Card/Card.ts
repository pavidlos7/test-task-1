import styled from 'styled-components';
import { Link } from 'react-router-dom';
import constants from '../../../../constants';

export default styled(Link)`
  display: flex;
  overflow: hidden;
  width: ${constants.card.width}px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.75);
`;
