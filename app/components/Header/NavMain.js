import styled from 'styled-components';
import { palette } from 'styled-theme';

export default styled.div`
  height: 35px;
  text-align: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${(props) => props.hasBorder ? palette('headerNavMain', 1) : 'transparent'};
  background-color: ${palette('headerNavMain', 0)};
`;