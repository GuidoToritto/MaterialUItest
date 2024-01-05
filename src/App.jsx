import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Container, CssBaseline, Divider } from "@mui/material";
import { Header } from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        width: "100%",   
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        pt: 1,
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>

      
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          maxWidth="xs"
          sx={{
            boxShadow: 1,
            pb: 2,
            transition: "background-color 2s, color 2s",
          }}
        >
  
            
            <MyApp />
            <Header />
            <Main />
            <br />
            <Divider />
            <Footer />
         
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
