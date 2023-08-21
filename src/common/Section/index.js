import { Title } from "./styled";

const Section = ({ title, body }) => {
  return (
    <div>
      <Title>{title}</Title>
      <div>{body}</div>
    </div>
  );
};
export default Section;
