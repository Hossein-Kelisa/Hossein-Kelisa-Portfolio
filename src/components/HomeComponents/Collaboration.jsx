function CollaborationBanner() {
  return (
    <div
      style={{
        padding: "5rem 2rem",
        display: "flex",
        justifyContent: "center",
        transform: "rotate(-3deg)",
        background: "linear-gradient(to left, #ffffff, #edf5fbad)",
        borderRadius: "15px",
        textAlign: "center",
        maxWidth: "700px",
        width: "100%",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.551)",
        margin: "0 auto 2rem auto",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#bd1111ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        🤝
      </div>

      <div>
        <h2 style={{ fontSize: "30px", margin: 0 }}>Open to Collaboration</h2>
        <p style={{ color: "#555", fontSize: "14px", marginTop: "4px" }}>
          I enjoy working with others and building meaningful projects together.
          Let’s connect and create something great!
        </p>
      </div>
    </div>
  );
}
export default CollaborationBanner;
