import styled from 'styled-components';
import { media } from '../../../mixins';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  ${media.up('lg')} {
    flex-direction: row;
  }
`;
