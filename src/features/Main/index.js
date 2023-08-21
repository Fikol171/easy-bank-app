import Tile from "../../common/Tile";
import {
  ApiIcon,
  BudgetIcon,
  Container,
  Info,
  OnBoardingIcon,
  OnlineIcon,
  Text,
  Wrapper,
} from "./styled";

const Main = () => {
  return (
    <Container>
      <Info>
        We leverage Open Banking to turn your bank account into your financial
        hub.
        <br /> Control your finances like never before.
      </Info>
      <Wrapper>
        <Tile
          icon={<OnlineIcon />}
          title="Online Banking"
          content={
            <Text>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </Text>
          }
        />
        <Tile
          icon={<BudgetIcon />}
          title="Simple Budgeting"
          content={
            <Text>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits
            </Text>
          }
        />
        <Tile
          icon={<OnBoardingIcon />}
          title="Fast Onboarding"
          content={
            <Text>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.{" "}
            </Text>
          }
        />
        <Tile
          icon={<ApiIcon />}
          title="Open API"
          content={
            <Text>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.{" "}
            </Text>
          }
        />
      </Wrapper>
    </Container>
  );
};
export default Main;
