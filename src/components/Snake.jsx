const Snake = ({ snake }) => {
  return (
    <div>
      <div
        style={{
          borderRadius: "50%",
          height: "8px",
          width: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
          color: "white",
        }}
      />
      <div
        style={{
          borderRadius: "50%",
          borderRight: "4px solid black",
          height: "12px",
          width: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          color: "white",
        }}
      />
      <div
        style={{
          borderRadius: "50%",
          borderLeft: "4px solid black",
          height: "12px",
          width: "12px",
          display: "flex",
          padding: "2px",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          color: "white",
        }}
      >
        {snake.id + 1}
      </div>
      <div
        style={{
          borderRadius: "50%",
          borderRight: "4px solid black",
          height: "12px",
          width: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          color: "white",
        }}
      />
    </div>
  );
};

export default Snake;
