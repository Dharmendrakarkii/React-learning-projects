'use client'

import { useState } from "react"

const Counter = () => {
  const [number, setNumber] = useState(10)

  const increment = () => {
    setNumber(prev => prev + 1)
  }

  const decrement = () => {
    setNumber(prev => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <div style={styles.page}>
      <div style={styles.glassCard}>
        <h1 style={styles.heading}>Digital Counter</h1>

        <div style={styles.circle}>
          <span style={styles.value}>{number}</span>
        </div>

        <div style={styles.buttons}>
          <button onClick={increment} style={styles.plusBtn}>+</button>
          <button
            onClick={decrement}
            disabled={number === 0}
            style={{
              ...styles.minusBtn,
              opacity: number === 0 ? 0.4 : 1,
            }}
          >
            −
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  glassCard: {
    width: "340px",
    padding: "35px",
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 40px rgba(0,255,255,0.3)",
    textAlign: "center",
    color: "#fff",
  },
  heading: {
    marginBottom: "25px",
    letterSpacing: "1px",
  },
  circle: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    border: "4px solid #22d3ee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 30px",
    boxShadow: "0 0 20px #22d3ee",
  },
  value: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  plusBtn: {
    width: "70px",
    height: "70uhinpx",
    borderRadius: "50%",
    border: "none",
    background: "#22c55e",
    fontSize: "32px",
    color: "#000",
    cursor: "pointer",
    boxShadow: "0 0 15px #22c55e",
  },
  minusBtn: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "none",
    background: "#f43f5e",
    fontSize: "32px",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 0 15px #f43f5e",
  },
}
