import React from "react";

const SimpleError = () => {
  const wrap = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f4f6",
    textAlign: "center",
    padding: "16px",
  };
  const card = { maxWidth: 720 };
  const icon = { fontSize: 40, marginBottom: 12 };
  const title = {
    fontSize: 24,
    fontWeight: 600,
    margin: "0 0 8px",
    overflow: "hidden",   // 👈 added here
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };
  const text = { color: "#4b5563", margin: 0 };

  return (
    <div style={wrap}>
      <div style={card}>
        <div style={icon}>⚠️</div>
        <h1 style={title}>Oops! Something went wrong.</h1>
        <p style={text}>
          This page didn't load Google Maps correctly. Please check the console for technical details.
        </p>
      </div>
    </div>
  );
};

export default SimpleError;
