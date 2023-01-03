import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[5]};
`;

export const Input = styled.input`
  display: inline-block;
  width: 200px;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  border: none;
  border-bottom: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[2]};
  outline-color: ${p => p.theme.colors.secondary};

  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  /* outline: none; */

  :hover {
    opacity: 1;
  }
`;
