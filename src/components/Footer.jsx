import React from "react";

function Footer() {
	return (
		<footer className="bg-gray-900  text-white text-center p-10 sticky bottom-0 w-full">
			<p>
				&copy; {new Date().getFullYear()} Group 9 Project. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
