import logo from './logo.svg';
import './App.css';
import FunctionalProp from './components/FunctionalProp';
import ListComp from './components/ListComp';
import Usecss from './components/Usecss';
import ConditionalClass from './components/ConditionalClass';

function App() {
  // function showName(name){
  //   console.log('my name is: ' + name);
  // }
  return (
    <div>
      {/* <FunctionalProp showname = {showName}></FunctionalProp> */}

      {/* <ListComp></ListComp> */}
      {/* <Usecss></Usecss> */}

      <ConditionalClass></ConditionalClass>
      
    </div>
  );
}

export default App;
