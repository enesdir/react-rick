import { Chip } from './Chip'

import './Chips.css'

export const Chips = ({ selectedOptions, onOptionRemove, displayValue, isObject }) => {
	return (
		<div className='chip-container'>
			{selectedOptions.map((option, i) => (
				<Chip
					key={i}
					onClick={() => onOptionRemove(option)}
					text={isObject ? option[displayValue] : (option || '').toString()}
				/>
			))}
		</div>
	)
}
