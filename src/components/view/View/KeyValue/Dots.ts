import _ from 'lodash';
import styled from 'styled-components';

export default styled.div.attrs({
  children: _.repeat('. ', 100).trimRight(),
})`
  overflow: hidden;
  width: 100%;
  height: 1em;
  user-select: none;
`;
