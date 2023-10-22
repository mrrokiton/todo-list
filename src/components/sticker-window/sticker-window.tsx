import React from 'react';
import { StickerWindowProps } from './sticker-window-types';

import './sticker-window.scss';

export const StickerWindow: React.FC<
	React.PropsWithChildren<StickerWindowProps>
> = ({ title, children }) => (
	<div className='sticker-window'>
		<div className='sticker-window-header'>{title}</div>
		<div className='sticker-window-container'>{children}</div>
	</div>
);
