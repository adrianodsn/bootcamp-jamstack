import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
  background-color: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonDefault = css`
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

export const Button = styled.button`
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  opacity: 1;
  padding: 12px 26px;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;