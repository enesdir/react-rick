/* eslint-disable @typescript-eslint/no-explicit-any */

export type Option<T = any> = {
	value: T
	disabled?: boolean
	[key: string]: any
}

export type AwesomeSelectProps<T = any> = {
	id?: string
	options: Option<T>[]
	selectedValues?: any
	preSelectedValues?: any
	isMulti?: boolean
	isLoading?: boolean
	isSingleSelect?: boolean
	isShowCheckbox?: boolean
	isCaseSensitiveSearch?: boolean
	isCloseOnSelect?: boolean
	isAvoidHighlightFirstOption?: boolean
	isHidePlaceholder?: boolean
	isDisablePreSelectedValues?: boolean
	selectionLimit?: any
	groupBy?: string
	optionValueDecorator?: (v: string, option: any) => React.ReactNode | string
	onSelect?: (selectedList: any, selectedItem: any) => void
	onRemove?: (selectedList: any, selectedItem: any) => void
	onSearch?: (value: string) => void
	onKeyPressFn?: (event: any, value: string) => void
	disable?: boolean
	className?: string
	style?: object
	placeholder?: string
	isObject?: boolean
	displayValue?: string
	name?: string
}

export interface ChipSingleProps<T = any> {
	className?: string
	option: Option<T>
}

export interface ChipMultiProps<T = any> extends ChipSingleProps<T> {
	options: Option<T>[]
	onRemove(value: T): void
}
