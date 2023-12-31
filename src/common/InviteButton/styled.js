import { styled } from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.color.White};
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 25px;
  font-size: 12px;
  background: linear-gradient(
    225deg,
    hsl(202.44deg 100% 46.85% / 87%),
    hsl(109deg 100% 25% / 81%),
    hsl(208deg 100% 48% / 83%)
  );
  transition-duration: 1s;

  &:hover {
    transform: scale(1.08);
  }
`;
