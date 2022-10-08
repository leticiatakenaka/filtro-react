import "./App.css";
import { TextField, Box } from "@mui/material";
import { useState } from "react";

function App() {
  const [names] = useState(["Maria", "João", "Paulo", "Ricardo", "Felipe"]);

  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="container">
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <TextField
          label="Nomes"
          variant="outlined"
          value={data}
          onChange={handleChange}
        />
        {names
          .filter((name) => name.toUpperCase().includes(data.toUpperCase()))
          .map((filteredName, i) => (
            <li key={i}>{filteredName}</li>
          ))}
      </Box>
    </div>
  );
}

export default App;
