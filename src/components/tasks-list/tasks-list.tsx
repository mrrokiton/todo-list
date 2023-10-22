import React from 'react';
import { StickerWindow } from '../sticker-window/sticker-window';
import { useSelector } from 'react-redux';
import { Task } from '../../reducers/tasks-types';
import { RootState } from '../../reducers/store';
import { TaskTile } from '../task-tile/task-tile';

import './tasks-list.scss';

export const TasksList = () => {
	const { tasks } = useSelector((state: RootState) => state.tasks);

	const sortedTasks = [...tasks].sort(
		(taskA, taskB) => Number(taskA.isDone) - Number(taskB.isDone)
	);

	return (
		<StickerWindow title='tasks'>
			<div className='tasks-list'>
				{sortedTasks.map((task: Task) => (
					<TaskTile task={task} key={task.id} />
				))}
			</div>
		</StickerWindow>
	);
};
