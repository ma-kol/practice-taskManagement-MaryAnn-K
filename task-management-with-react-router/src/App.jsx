// Set up the routes to display the task list and task details.

import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

function App() {

  const mockData = [
    { 'id': '1', 'title': 'Paint Wall', 'description': 'Paint it!' },
    { 'id': '2', 'title': 'Learn React', 'description': 'Learn it!' },
    { 'id': '3', 'title': 'Take care of cat', 'description': 'Clean him!' }];

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/task/:id" element={<TaskDetail mockData={mockData} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
