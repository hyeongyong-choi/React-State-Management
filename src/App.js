import './App.css';
// import TestMocking from './components/TestMocking';
// import { FontButton } from './components/RecoilExample/FontButton';
// import { Text } from './components/RecoilExample/Text';
// import { CharacterCounter } from './components/RecoilExample/CharacterCounter';
import { RecoilRoot } from 'recoil';
import TodoList from './components/RecoilExample/Todo/TodoList';
import  CurrentUserInfo  from './components/RecoilExample/Todo/CurrentUserInfo';
import {Example} from './components/ReactQueryExample/Example';
import { QueryClient, QueryClientProvider } from 'react-query';
import QuickStart from './components/ReactQueryExample/QuickStart';
import {ReactQueryDevtools} from 'react-query/devtools'
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
     {/* <TestMocking/> */}
     {/* <RecoilRoot>
        <FontButton/>
        <Text/>
        <CharacterCounter/>
        <TodoList/>
        <CurrentUserInfo/>
     </RecoilRoot> */}
     <QueryClientProvider client={queryClient}>
        <Example/>
        <QuickStart/>
        <ReactQueryDevtools/>
     </QueryClientProvider>
    </div>
  );
}

export default App;
