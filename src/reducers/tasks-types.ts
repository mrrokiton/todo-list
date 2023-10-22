export type TaskColors = 'black' | 'red' | 'green' | 'blue';

export type Task = {
	id: string;
	isDone: boolean;
	color: TaskColors;
	description: string;
};

export type TasksState = {
	tasks: Task[];
};
