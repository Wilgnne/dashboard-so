import React from 'react';
import Terminal from 'terminal-in-react';

import { Container, Content, Footer } from './styles';

import Header from '../views/Header';
import Main from '../views/Main';

function App() {
  return (
    <Container>
      <Content>
        <Header />
        <Main />
      </Content>

      <Footer>
        <div style={{
          position: "absolute",
          padding: "5px",
          borderRadius: "15px",
          background: "#000",
          width: "75%",
          height: "75%"
        }}>
          <Terminal
            startState="maximised"
            hideTopBar={true}
            allowTabs={false}
            showActions={false}
          />
        </div>
      </Footer>
    </Container>
  );
}

export default App;
