import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState("notice");
	const [toastStack, setToastStack] = React.useState([]);
	const [isToastShelfOpen, setIsToastShelfOpen] = React.useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setToastStack((prev) => [
			...prev,
			{ id: crypto.randomUUID(), message, variant },
		]);
		setMessage("");
		setVariant("notice");
		setIsToastShelfOpen(true);
	}

	const value = {
		message,
		variant,
		toastStack,
		isToastShelfOpen,
		setMessage,
		setVariant,
		setToastStack,
		setIsToastShelfOpen,
		handleSubmit,
	};

	return (
		<ToastContext.Provider value={value}>{children}</ToastContext.Provider>
	);
}

export default ToastProvider;
