import React from 'react';
import List from './components/List';
import "./App.css"

function App() {
 
  return (
    <main>
      <section className="container">
        <div className="title">
            <h3>Employee List</h3>
        <h5>
          (Employees 1 to 5)
        </h5>
        </div>
      
        <List />
       
      </section>
    </main>
  );
}

export default App;