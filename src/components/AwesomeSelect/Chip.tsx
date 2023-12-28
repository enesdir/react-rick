/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChipLabel } from './ChipLabel'

import './chip.css'

import { XIcon } from './icon/XIcon'

export const Chip = ({ text, onClick }: ChipProps) => {
	return (
		<div className='chip'>
			<ChipLabel text={text} />
			<button type='button' className='chip-button' onClick={onClick}>
				<XIcon className='fill-white' />
			</button>
		</div>
	)
}
