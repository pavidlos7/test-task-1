import styled from 'styled-components';
import constants from '../../../constants';

const border = `1px solid ${constants.colors.border1}`;

export default styled.div`
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: center;
    border-right: ${border};
  }

  li {
    border: ${border};
    border-right: none;
    background: ${constants.colors.background4};
  }

  li:active,
  li:focus,
  li:hover {
    background: ${constants.colors.background3};
  }

  li.active {
    background: ${constants.colors.background3};
  }

  li.disabled {
    display: none;
    pointer-events: none;
  }

  a {
    display: block;
    width: 25px;
    padding: 2px 0;
    text-align: center;
  }
`;
