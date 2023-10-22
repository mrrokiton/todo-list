import React from 'react';
import { TasksList } from './components/tasks-list/tasks-list';
import { TaskAdder } from './components/task-adder/task-adder';

import './App.scss';

function App() {
	return (
		<div className='App'>
			<TasksList />
			<TaskAdder />
		</div>
	);
}

export default App;
