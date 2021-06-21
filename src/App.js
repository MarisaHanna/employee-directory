import React, { useState } from 'react'
import './App.css';
import useFetchEmployee from './utils/fetchEmployee';
import { Container } from 'react-bootstrap';
import People from './components/People/People';

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {employee, loading, error } = useFetchEmployee(params, page)
  return (

    <Container className= 'my-4'>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error... Try Refreshing Your Page</h1>}
      {employee.map(name => {
        return <People key={name.id.value} name={name}/>
      })}
    </Container>
  );
}

export default App;
