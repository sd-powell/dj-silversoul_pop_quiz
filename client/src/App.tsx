import { useEffect, useState } from "react";

export default function App() {
  // Store server status text
  const [serverStatus, setServerStatus] = useState<string>("checking...");

  // Run once when component mounts
  useEffect(() => {
    fetch("http://localhost:8000/api/health")
      .then((response) => response.json())
      .then((data) => {
        // Expecting { status: "ok" }
        setServerStatus(data.status);
      })
      .catch((error) => {
        console.error("Error calling /api/health:", error);
        setServerStatus("error");
      });
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>DJ Silver Soul Pop Quiz</h1>
      <p>Your React client is running successfully.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Server connection</h2>
        <p>Server status: {serverStatus}</p>
      </section>
    </main>
  );
}