
import { AddTodo } from './components/AddTodo';
import { Container,Heading } from '@chakra-ui/react';
import { TodoList } from './components/TodoList';
import { Filter } from './components/Filter';


function App() {
  return (
   <Container maxW="container.sm" >
      <Heading my="4">TodoList</Heading>
      <AddTodo />
       <Filter/>
      <TodoList />
     
    </Container>
  );
}

export default App;
