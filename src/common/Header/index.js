import { Button, Logo, NavBar, Links, Link } from "./styled";

const Header = () => {
  return (
    <NavBar>
      <Logo />
      <Links>
        <Link href="Home">Home</Link>
        <Link href="Home">About</Link>
        <Link href="Home">Contact</Link>
        <Link href="Home">Blog</Link>
        <Link href="Home">Careers</Link>
      </Links>
      <Button>Request Invite</Button>
    </NavBar>
  );
};

export default Header;
