import './App.css';

import Header from './components/Header';
// import VisitCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';

const App = () => {
  return (
    <div className="App">
      <Header heading="Pat's Pizza Place" />
      {/* <VisitCounter /> */}
      <Pizza />
    </div>
  );
};

export default App;
