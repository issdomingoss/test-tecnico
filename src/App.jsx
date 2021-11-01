import { GlobalStyle } from "./styles/global";
import { Router } from './routers'
import { ContainerApp } from './style'

const App = () => {
  return (
    <ContainerApp>
      <GlobalStyle />
      <Router />
    </ContainerApp>
  );
}

export default App;
