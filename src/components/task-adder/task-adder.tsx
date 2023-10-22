import React, { useRef, useState } from 'react';
import { StickerWindow } from '../sticker-window/sticker-window';
import { useDispatch } from 'react-redux';
import { addTask } from '../../reducers/tasks';
import { Task, TaskColors } from '../../reducers/tasks-types';
import uuid from 'react-uuid';

import './task-adder.scss';

export const TaskAdder = () => {
	const dispatch = useDispatch();
	const taskDescriptionRef = useRef(null);
	const [selectedColor, setSelectedColor] = useState<TaskColors>('black');

	const addTaskHandler = () => {
		const inputValue = taskDescriptionRef.current?.value;
		const task: Task = {
			id: uuid(),
			description: inputValue,
			color: selectedColor,
			isDone: false,
		};
		dispatch(addTask(task));
	};

	const buttonColorHandler = (color: TaskColors) => setSelectedColor(color);

	return (
		<StickerWindow title={'add task'}>
			<div className='task-adder'>
				<div className='task-adder-color'>
					<p>Task color</p>
					<div className='task-adder-color-buttons'>
						<button
							title='red'
							onClick={buttonColorHandler.bind(this, 'red')}
							className={`red ${selectedColor === 'red' ? 'selected' : ''}`}
						/>
						<button
							title='green'
							onClick={buttonColorHandler.bind(this, 'green')}
							className={`green ${selectedColor === 'green' ? 'selected' : ''}`}
						/>
						<button
							title='blue'
							onClick={buttonColorHandler.bind(this, 'blue')}
							className={`blue ${selectedColor === 'blue' ? 'selected' : ''}`}
						/>
						<button
							title='black'
							onClick={buttonColorHandler.bind(this, 'black')}
							className={`black ${selectedColor === 'black' ? 'selected' : ''}`}
						/>
					</div>
				</div>
				<div className='task-adder-description'>
					<label htmlFor='task-desc'>Description: </label>
					<textarea
						type='text'
						id='task-desc'
						ref={taskDescriptionRef}
						rows='5'
						maxlength='150'
						className={selectedColor}
					/>
				</div>
				<button onClick={addTaskHandler} className='task-adder-add-button'>
					ADD
				</button>
			</div>
		</StickerWindow>
	);
};
