import "./App.css";
import { createTheme, MantineProvider, Text } from "@mantine/core";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  const theme = createTheme({
    colors: {
      midnightBlue: [
        "#002651", // formerly 950
        "#003366", // formerly 900
        "#004a94", // formerly 800
        "#0057b4", // formerly 700
        "#006edf", // formerly 600
        "#008dff", // formerly 500
        "#20a8ff", // formerly 400
        "#6dc6ff", // formerly 300
        "#b2dfff", // formerly 200
        "#dceeff", // formerly 100
        "#eef7ff", // formerly 50
      ],
      keppel: [
        "#0b2828", // formerly 950
        "#1d4443", // formerly 900
        "#1e514f", // formerly 800
        "#206562", // formerly 700
        "#237e78", // formerly 600
        "#32a89e", // formerly 500
        "#48b9ae", // formerly 400
        "#75d3c6", // formerly 300
        "#a8e7dd", // formerly 200
        "#d4f3ee", // formerly 100
        "#f2fbf9", // formerly 50
      ],
      mineShaft: [
        "#262626", // formerly 950
        "#333333", // formerly 900
        "#454545", // formerly 800
        "#4f4f4f", // formerly 700
        "#5d5d5d", // formerly 600
        "#6d6d6d", // formerly 500
        "#888888", // formerly 400
        "#b0b0b0", // formerly 300
        "#d1d1d1", // formerly 200
        "#e7e7e7", // formerly 100
        "#f6f6f6", // formerly 50
      ],
    },
  });
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
