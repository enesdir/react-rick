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
	isDisable?: boolean
	isShowCheckbox?: boolean
	isCaseSensitiveSearch?: boolean
	isCloseOnSelect?: boolean
	isHidePlaceholder?: boolean
	selectionLimit?: any
	groupBy?: string
	optionValueDecorator?: (v: string, option: any) => React.ReactNode | string
	onSelect?: (selectedList: any, selectedItem: any) => void
	onRemove?: (selectedList: any, selectedItem: any) => void
	onSearch?: (value: string) => void
	disable?: boolean
	className?: string
	placeholder?: string
	isObject?: boolean
	displayValue?: string
	imgValue?: string
}
