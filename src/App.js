import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles"
import { theme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
