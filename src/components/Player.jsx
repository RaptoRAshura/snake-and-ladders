const Player = ({ player }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        boxShadow: "2px 1px 3px 0px gray",
        height: "15px",
        width: "15px",
        display: "flex",
        padding: "2px",
        justifyContent: "center",
        alignItems: "center",
        background: player.color,
        color: player.color === "yellow" ? "black" : "white",
      }}
    >
      {player.id + 1}
    </div>
  );
};

export default Player;
