import { Fragment } from 'react'

import './DropDown.css'

export const DropDown = ({
	className,
	isMulti,
	fadeOutSelection,
	isOpenDropDown,
	data,
	groupBy,
	searchTerm,
	isShowCheckbox,
	optionValueDecorator,
	groupedObject,
	isDisablePreSelectedOptions,
	isSelectedValue,
	onSelectItem,
	displayValue,
	imgValue,
	isObject,
}) => {
	const classNames = ['options-wrapper', className, isOpenDropDown ? 'display-block' : 'display-none'].filter((c) =>
		Boolean(c)
	)

	const renderGroupByOptions = () => {
		return Object.keys(groupedObject).map((obj) => {
			return (
				<Fragment key={obj}>
					<li className='group-heading'>{obj}</li>
					{groupedObject[obj].map((option, i) => {
						const isSelected = isSelectedValue(option)
						return (
							<li
								key={`option${i}`}
								className={`group-child-ele option ${isSelected ? 'selected' : ''} ${
									fadeOutSelection(option) && 'disable-selection'
								} ${isDisablePreSelectedOptions(option) && 'disableSelection'}`}
								onClick={() => onSelectItem(option)}
							>
								{isShowCheckbox && isMulti && (
									<input type='checkbox' className={'checkbox'} readOnly checked={isSelected} />
								)}
								{optionValueDecorator(isObject ? option[displayValue] : (option || '').toString(), searchTerm)}
							</li>
						)
					})}
				</Fragment>
			)
		})
	}
	const renderNormalOption = () => {
		return (
			<>
				{data
					// .filter((option) => option[displayValue].toLowerCase().includes(searchTerm.toLowerCase()))
					.map((option, i) => {
						const isSelected = isSelectedValue(option)
						return (
							<li key={`option${i}`} onClick={() => onSelectItem(option)}>
								{isShowCheckbox && isMulti && (
									<input type='checkbox' readOnly className={`checkbox`} checked={isSelected} />
								)}
								{imgValue && isObject && (
									<div className='option-image'>
										<img src={option[imgValue]} loading='lazy' />
									</div>
								)}
								<div className='option-content'>
									<span className='option-title'>
										{optionValueDecorator(isObject ? option[displayValue] : (option || '').toString(), searchTerm)}
									</span>
									{isObject && <span className='option-description'>Episode {option['episode']?.length}</span>}
								</div>
							</li>
						)
					})}
			</>
		)
	}
	const renderOptionList = () => {
		if (data.length < 1 || !data) {
			return <div className='dropdown-no-data'> no data found</div>
		}
		return <ul className={`option-container`}> {!groupBy ? renderNormalOption() : renderGroupByOptions()}</ul>
	}
	return (
		<div
			className={classNames.join(' ')}
			onMouseDown={(e) => {
				e.preventDefault()
			}}
		>
			<div className='options-container'>{renderOptionList()}</div>
		</div>
	)
}
