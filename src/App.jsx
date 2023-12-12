import {Container} from "@mui/material";
import { Header } from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Container maxWidth="xs" sx={{ boxShadow: 1, pb: 2}}>
        <Header />
        <Main/>
        <Footer/>
      </Container>
    </>
  );
}

export default App;
