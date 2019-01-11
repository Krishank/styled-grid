import styled from 'styled-components';

export const Label = styled.label.attrs({
  htmlFor: ${props => props.htmlFor};
})`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
`;
