import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header.js';
import { Container } from './components/styles/Container.style.js';
import GlobalStyles from './components/styles/Global.js';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App () {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hi</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
