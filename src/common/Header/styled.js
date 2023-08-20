import { styled } from "styled-components";
import { ReactComponent as logo } from "./images/logo.svg";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.White};
`;
export const Logo = styled(logo)``;

export const Links = styled.div``;

export const Link = styled.a`
  margin: 0 15px;
  color: ${({ theme }) => theme.color.GrayishBlue};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    padding-bottom: 25px;
    border-bottom: 4px solid ${({ theme }) => theme.color.LimeGreen};
  }
`;

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
