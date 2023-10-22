import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TasksState, Task } from './tasks-types';

const initialState: TasksState = {
	tasks: [],
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Task>) => {
			state.tasks.push(action.payload);
		},
		removeTask: (state, action: PayloadAction<string>) => {
			const taskIndex = state.tasks.findIndex(
				(task) => task.id === action.payload
			);
			state.tasks.splice(taskIndex, 1);
		},
		changeTaskStatus: (state, action: PayloadAction<string>) => {
			const task = state.tasks.find((task) => task.id === action.payload);
			task.isDone = !task.isDone;
		},
	},
});

export const { addTask, removeTask, changeTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
