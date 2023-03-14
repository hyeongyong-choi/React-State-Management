import './App.css';
// import TestMocking from './components/TestMocking';
// import { FontButton } from './components/RecoilExample/FontButton';
// import { Text } from './components/RecoilExample/Text';
// import { CharacterCounter } from './components/RecoilExample/CharacterCounter';
import { RecoilRoot } from 'recoil';
import TodoList from './components/RecoilExample/Todo/TodoList';

function App() {
  return (
    <div className="App">
     {/* <TestMocking/> */}
     <RecoilRoot>
        {/* <FontButton/>
        <Text/>
        <CharacterCounter/> */}
        <TodoList/>
     </RecoilRoot>
    </div>
  );
}

export default App;
