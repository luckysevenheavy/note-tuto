import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Create from "./page/Create";
import Notes from "./page/Notes";


const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe"
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Notes />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </Layout>
      </Router>
       
    </ThemeProvider>
  );
}

export default App;
