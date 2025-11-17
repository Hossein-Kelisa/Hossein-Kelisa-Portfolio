function CollaborationBanner() {
  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center", rotate: "-3deg" }}>
      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          background: "white",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
          }}
        >
          🤝
        </div>

        <div>
          <h2 style={{ fontSize: "20px", margin: 0 }}>Open to Collaboration</h2>
          <p style={{ color: "#555", fontSize: "14px", marginTop: "4px" }}>
            I enjoy working with others and building meaningful projects
            together. Let’s connect and create something great!
          </p>
        </div>
      </div>
    </div>
  );
}
export default CollaborationBanner;
