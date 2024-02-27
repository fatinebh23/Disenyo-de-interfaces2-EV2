import React from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  const AppStyleButton = {
    backgroundColor: 'blue',
    margin: '10px 10px'
  };

  return (
    <div className="App">
      <Button style={AppStyleButton}>Reload</Button>
    </div>
  );
}

export default App;
