
import './App.css';
import React, { useState } from 'react';
import data from './data/data';
import Nav from './components/Nav';
import List from './components/List';
import Insert from './components/Insert';
function App() {
  const [collaborators, setCollaborators] = useState(data);
  const [search, setSearch] = useState('');

  const handleSearChange = (value) => {
    setSearch(value);
  }
  const handleAddCollaborator = (collaborator) => {
    const updateCollaborator={
      ...collaborator,
      id: collaborators.length + 1
    }
    setCollaborators([...collaborators, updateCollaborator]);
  }

  return (
    <div className="container-fluid">
      <Nav onSearchChange={handleSearChange} />
      <div className="container">
        <Insert onSubmit={handleAddCollaborator}/>
        <List collaborators={collaborators} searchTerm={search} />
      </div>
    </div>
  );
}

export default App;
