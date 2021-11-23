import { useState } from 'react';

//components
import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';
import Info from './components/Info';
import Todos from './components/Todos';
import Emty from './components/Emty';

function App() {
  const [value, setValue] = useState('');
  console.log(value);
  const [todos, setTodos] = useState([
    {title : 'Susu Ultra', count:1},
    {title: 'Tahu Sumedang' , count : 1},
    {title : 'Semangka', count: 1}
  ]);

  const getTotalCounts = () => {
    const totalCount = todos.reduce((total, num) => {
      return total + num.count; 
    }, 0);

    return totalCount
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value) {
      alert("Input tidak dapat kosong");
      return
    }
    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  const handleAdditionalCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count += 1 ;
    setTodos(newTodos);
  }
  
  const handleSubstractCount = (index) => {
    const newTodos = [...todos];
    if(newTodos[index].count > 0) {
      newTodos[index].count -= 1 ;
    } else {
      newTodos.splice(index,1);
    }
    setTodos(newTodos);
  }

  return (
    <>
      <Navbar />

      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Info
              todoLength={todos.length}
              getTotal={getTotalCounts()}
              onDelete={() => setTodos([])}
        />
        {todos.length > 0 ? (
          <Todos
            todos={todos}
            kurang={handleSubstractCount}
            tambah={handleAdditionalCount}
          />
        ) : (
          <Emty/>
        )}
      </Container>
    </>
  );
}

export default App;
