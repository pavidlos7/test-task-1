import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

export default styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  background: url(${logo}) no-repeat center center;
  background-size: contain;
`;
