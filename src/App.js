import React from 'react';
import styled from 'styled-components';

const Blank = styled.div`
  width: 100px;
  height: 100px;
  background: var(--pink);
  color:#fff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center'}}>
      <Blank>
        <h1>test</h1>
      </Blank>
      </div>
    )
  }
}

export default App;
