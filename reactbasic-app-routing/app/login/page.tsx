const Signup = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(8, 4, 4, 0.9)",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontSize:'30px',
            fontStyle:'bold',
            color:"#3B82F6",
            fontFamily: "math",
            padding: "12px",
            textAlign: "center",
            
          }}
        >
          Welcome Back!
        </h1>

        <p style={{ fontSize: "18px", textAlign: "center", margin: "15px 0" }}>
          
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Enter username"
            style={inputStyle}
          />
          
          <input
            type="password"
            placeholder="Enter password"
            style={inputStyle}
          />
          
          <button
            style={{
              backgroundColor: "#3B82F6",
              color: "white",
              fontSize: "18px",
              height: "45px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Login
          </button>
        </div>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Forgot password?<br></br><br></br>

          Don't have an account? <span style={{ color: "#3B82F6", cursor: "pointer" }}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #fdfdfdff",
};

export default Signup;


