import React from 'react';
import { StickerWindow } from './sticker-window';
import { render } from '@testing-library/react';
import { Task } from '../../reducers/tasks-types';

describe(StickerWindow, () => {
	it('should render sticker window', () => {
		const { container } = render(<StickerWindow title='test title' />);
		const taskTile = container.getElementsByClassName('sticker-window');

		expect(taskTile).toBeTruthy();
	});

	it('should render child component', () => {
		const { container } = render(
			<StickerWindow title='test title'>
				<div className='test-child' />
			</StickerWindow>
		);
		const childElement = container.getElementsByClassName('test-child');

		expect(childElement).toBeTruthy();
	});

	it('should render correct title', () => {
		const testTitle = 'test title';
		const { container } = render(<StickerWindow title={testTitle} />);
		const titleElement = container.getElementsByClassName(
			'sticker-window-header'
		)[0].innerHTML;

		expect(titleElement).toEqual(testTitle);
	});
});
