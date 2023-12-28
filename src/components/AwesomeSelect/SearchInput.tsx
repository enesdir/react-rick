/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useId, useRef } from 'react'

import type { ChangeEventHandler, FocusEventHandler } from 'react'

import './SearchInput.css'

import { Chips } from './Chips'
import { DownArrow } from './icons/DownArrow'

import type { AwesomeSelectProps } from './types'

type SearchInputProps = {
	selectedOptions: AwesomeSelectProps['options']
	isOpenDropDown: boolean
	isDisable: boolean
	isLoading: boolean
	isMulti: boolean
	isObject: boolean
	displayValue: string
	placeholder: string
	isHidePlaceholder: AwesomeSelectProps['isHidePlaceholder']
	focused?: boolean
	searchTerm: string
	onClear(): void
	onClick(): void
	onSearchChange: ChangeEventHandler<HTMLInputElement>
	onSearchFocus: FocusEventHandler<HTMLInputElement>
	onSearchBlur?: FocusEventHandler<HTMLInputElement>
	onOptionRemove(value: any): void
}
export const SearchInput = ({
	isOpenDropDown,
	selectedOptions,
	focused,
	displayValue,
	isObject,
	isDisable,
	isLoading,
	isHidePlaceholder,
	placeholder,
	isMulti,
	searchTerm,
	onClick,
	onSearchFocus,
	onSearchBlur,
	onSearchChange,
	onOptionRemove,
}: SearchInputProps) => {
	const inputSearchRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (searchTerm) {
			inputSearchRef.current.innerText = ''
		}

		if (focused) {
			inputSearchRef.current.focus()
		}
	}, [focused, searchTerm])

	const id = useId()
	return (
		<div className='search-wrapper' onClick={onClick}>
			<Chips
				onOptionRemove={onOptionRemove}
				selectedOptions={selectedOptions}
				isObject={isObject}
				displayValue={displayValue}
			/>
			<input
				id={id}
				type='text'
				ref={inputSearchRef}
				value={searchTerm}
				onChange={onSearchChange}
				onFocus={onSearchFocus}
				onBlur={onSearchBlur}
				autoComplete='off'
				placeholder={
					(!isMulti && selectedOptions.length) || (isHidePlaceholder && selectedOptions.length) ? '' : placeholder
				}
				disabled={!isMulti || isDisable || isLoading}
			/>
			<div className='icon-down-dir' role='button' tabIndex={-1}>
				<DownArrow className={isOpenDropDown ? 'rotate-180' : 'rotate-0'} />
			</div>
		</div>
	)
}
