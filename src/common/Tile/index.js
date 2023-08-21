const Tile = ({ icon, title, content }) => {
  return (
    <div>
      <p>{icon}</p>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};
export default Tile;
