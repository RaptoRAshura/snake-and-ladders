const Ladder = ({ ladder }) => {
  return (
    <div>
      <div
        style={{
          borderLeft: "4px solid black",
          borderRight: "4px solid black",
          height: "28px",
          width: "10px",
          display: "flex",
          padding: "2px",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          color: "white",
        }}
      >
        {ladder.id + 1}
      </div>
    </div>
  );
};

export default Ladder;
