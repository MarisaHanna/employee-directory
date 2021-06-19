import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import useFetchEmployee from './fetchEmployee';
import { Container } from 'react-bootstrap';
import People from './People';

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {employee, loading, error } = useFetchEmployee(params, page)
  return (

    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error... Try Refreshing Your Page</h1>}
     {/* {employee && <h1>{employee.length}</h1>} */}
      {employee.map(name => {
        return <People key={name.id.value} name={name}/>
      })}
    </Container>
  );
}

export default App;
