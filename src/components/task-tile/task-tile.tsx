import React from 'react';
import { TaskTileProps } from './task-tile-types';
import { useDispatch } from 'react-redux';
import { changeTaskStatus, removeTask } from '../../reducers/tasks';

import './task-tile.scss';

export const TaskTile = ({ task }: TaskTileProps) => {
	const dispatch = useDispatch();

	const checkboxHandler = () => dispatch(changeTaskStatus(task.id));
	const removeButtonHandler = () => dispatch(removeTask(task.id));

	const taskClassName = () => {
		const basicClassName = 'task-tile-text';
		if (task.isDone) {
			return `${basicClassName} task-done`;
		}
		return `${basicClassName} task-${task.color}`;
	};

	return (
		<div className='task-tile'>
			<input
				onChange={checkboxHandler}
				type='checkbox'
				className='task-tile-checkbox'
				checked={task.isDone}
			/>
			<p title={task.description} className={taskClassName()}>
				{task.description}
			</p>
			<button onClick={removeButtonHandler} className='task-tile-remove'>
				<img
					src={require('../../assets/icons/trashcan-icon.png')}
					alt='trashcan icon'
				/>
			</button>
		</div>
	);
};
