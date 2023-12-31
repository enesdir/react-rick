import { useCallback, useState } from 'react'
import { Select } from 'react-select-light'

export const Character = () => {
	const [loading, setLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [searchResults, setSearchResults] = useState([])
	const handleQueryChange = useCallback(async (searchQuery: string) => {
		if (searchQuery) {
			setLoading(true)
			setIsError(false)
			try {
				// Simulating API call
				const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`)
				const data = await response.json()
				console.log(data)
				setSearchResults(data.results)
				setLoading(false)
				setIsError(false)
			} catch (error) {
				// Handle error
				setIsError(true)
				setLoading(false)
			}
		} else {
			setSearchResults([])
		}
	}, [])

	const highlightSearchInput = (label: string, query: string) => {
		if (!query || !label.toLowerCase().includes(query.toLowerCase())) {
			return label
		}

		const indexOfMatch = label.toLowerCase().indexOf(query.toLowerCase())
		const endOfMatch = indexOfMatch + query.length

		return (
			<span>
				{label.substring(0, indexOfMatch)}
				<b>{label.substring(indexOfMatch, endOfMatch)}</b>
				{label.substring(endOfMatch)}
			</span>
		)
	}
	return (
		<>
			<Select
				options={searchResults}
				isMulti
				isShowCheckbox
				isLoading={loading}
				isError={isError}
				onSearch={handleQueryChange}
				displayValue='name'
				imgValue='image'
				descriptionValue='episode'
				isObject
				optionValueDecorator={highlightSearchInput}
				// groupBy='label'
			/>
		</>
	)
}
