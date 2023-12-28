import { useCallback, useState } from 'react'

import { AwesomeSelect } from './AwesomeSelect/AwesomeSelect'

export const Character = () => {
	const [loading, setLoading] = useState(false)
	const [searchResults, setSearchResults] = useState([])
	const handleQueryChange = useCallback(async (searchQuery) => {
		if (searchQuery) {
			setLoading(true)
			try {
				// Simulating API call
				const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`)
				const data = await response.json()
				console.log(data)
				setSearchResults(data.results)
				setLoading(false)
			} catch (error) {
				// Handle error
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
			<AwesomeSelect
				options={searchResults}
				isMulti
				isShowCheckbox
				isLoading={loading}
				onSearch={handleQueryChange}
				displayValue='name'
				imgValue='image'
				isObject
				optionValueDecorator={highlightSearchInput}
				// groupBy='label'
			/>
		</>
	)
}
