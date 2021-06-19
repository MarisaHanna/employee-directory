import React from 'react'
import logo from './logo.svg';
import './App.css';
import useFetchEmployee from './fetchEmployee';
import { Container } from 'react-bootstrap';

function App() {
  const {employee, loading, error } = useFetchEmployee()
  return (

    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error... Try Refreshing Your Page</h1>}
      {employee && <h1>{ employee.length}</h1>}
    </Container>
  );
}

export default App;
