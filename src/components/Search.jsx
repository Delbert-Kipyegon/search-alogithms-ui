import React, { useState } from "react";

function Search() {
	// State for storing the data array and input values
	const [data, setData] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResult, setSearchResult] = useState(null); // Initialize searchResult state

	// Handles updates to the search input field
	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	// Binary search algorithm implementation
	const binarySearch = (arr, x) => {
		let start = 0,
			end = arr.length - 1;

		while (start <= end) {
			let mid = Math.floor((start + end) / 2);

			if (arr[mid] === x) return mid;
			else if (arr[mid] < x) start = mid + 1;
			else end = mid - 1;
		}

		return -1; // Element not found
	};

	// Adds new value to the data array and sorts it
	const handleAddValue = () => {
		if (inputValue.trim() !== "") {
			setData([...data, inputValue.trim()]); // Add value to the end of the array
			setInputValue(""); // Clear the input field
		}
	};

	const handleClearArray = () => {
		setData([]); // Clear the array
	};

	// Searches for the value within the data array
	const handleSearch = () => {
		const position = binarySearch(data, searchQuery);
		const value = data[position];
		if (position !== -1) {
			setSearchResult(`${value} found at position ${position}`);
		} else {
			setSearchResult(`Element not found in the array`);
		}
		// setSearchQuery(""); // Clear the search field
	};

	// Handles updates to the value input field
	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<div className="font-raleway bg-green-900 p-40 min-h-screen flex justify-center items-center">
			<div className="space-y-6">
				<div>
					<input
						type="text"
						value={inputValue}
						onChange={handleInputChange}
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								handleAddValue();
							}
						}}
						className="border border-gray-300 p-2 rounded"
						placeholder="Enter a value"
					/>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
						onClick={handleAddValue}
					>
						Add to Array
					</button>
					<button
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
						onClick={handleClearArray}
					>
						Clear Array
					</button>
				</div>
				{data.length > 0 && (
					<div className="text-white">
						<h2 className="font-bold">Array Values:</h2>
						{/* Display the array in the desired format */}
						<p>[{data.join(", ")}]</p>
					</div>
				)}
				<div>
					<input
						type="text"
						value={searchQuery}
						onChange={handleSearchChange}
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								handleSearch();
							}
						}}
						className="border  border-gray- p-2 rounded"
						placeholder="Search a value"
					/>
					<button
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
						onClick={handleSearch}
					>
						Search
					</button>
				</div>
				{searchResult && (
					<div className="text-white">Search Result: {searchResult}</div>
				)}
			</div>
		</div>
	);
}

export default Search;
