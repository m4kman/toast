import React from "react";

function useKeydown(key, callback) {
	React.useEffect(() => {
		function handleDismiss(e) {
			if (e.code === key) {
				callback();
			}
		}
		console.log("escape effect");
		window.addEventListener("keydown", handleDismiss);

		return () => {
			window.removeEventListener("keydown", handleDismiss);
			console.log("cleanup");
		};
	}, [key, callback]);
}

export default useKeydown;
