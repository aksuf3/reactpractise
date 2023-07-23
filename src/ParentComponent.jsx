// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const person1 = {
    name: 'John Doe',
    age: 30,
  };

  const person2 = {
    name: 'Jane Smith',
    age: 25,
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Forwarding props to ChildComponent using the JSX spread syntax */}
      <ChildComponent {...person1} />
      <ChildComponent {...person2} />
    </div>
  );
}

export default ParentComponent;
