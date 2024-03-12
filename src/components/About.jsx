import React from "react";

function About() {
	return (
		<div className="bg-gray-100 p-4 min-h-screen">
			<h1 className="font-bold text-3xl mb-2">Program Description</h1>
			<p>
				This program is designed to manage and search through a list of
				individuals involved in Group 9. It allows users to add new individuals
				to the list, search for existing members using a binary search
				algorithm, and display the data in a structured format.
			</p>
			<p>The current version of this project includes 10 individuals:</p>
			<ul className="list-disc mx-auto text-left w-3/4 mb-4">
				<li>Delbert Kipyegon</li>
				<li>Ivy Mbengi</li>
				<li>Kriss Njogu</li>
				<li>Morris Matiko</li>
				<li>Eric Kutto</li>
				<li>Faith Muthoni</li>
				<li>Dylan Mwangi</li>
				<li>Kamal Modi</li>
				<li>Joseph Mutuota</li>
				<li>Tasha Wanjala</li>
			</ul>
		</div>
	);
}

export default About;
