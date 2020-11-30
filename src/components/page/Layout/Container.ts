import styled from 'styled-components';
import { media } from '../../../mixins';

export default styled.div`
  display: flex;
  width: 400px;
  height: 100%;
  flex-direction: column;
  padding: 15px 0;
  margin: 0 auto;
  gap: 15px;

  ${media.up('lg')} {
    width: 930px;
  }
`;
