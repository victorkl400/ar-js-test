import React from 'react';
import ReactDOM, { render } from 'react-dom';

import Railcard from './railcard/Railcard';

class App extends Component {
  render() {
    return (
      <Railcard />
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
