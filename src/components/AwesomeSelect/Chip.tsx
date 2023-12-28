/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChipLabel } from './ChipLabel'

import './Chip.css'

import { XIcon } from './icons/XIcon'

type ChipProps = {
	text: string
	onClick: () => void
}
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
