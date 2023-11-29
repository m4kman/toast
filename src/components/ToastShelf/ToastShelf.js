import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import useKeydown from "../../hooks/useKeydown";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
	const { toastStack, setToastStack, setIsToastShelfOpen } =
		React.useContext(ToastContext);

	const handleToastsDimiss = React.useCallback(() => {
		setIsToastShelfOpen(false);
		setToastStack([]);
	}, [setToastStack, setIsToastShelfOpen]);

	useKeydown("Escape", handleToastsDimiss);

	React.useEffect(() => {
		console.log("effect 2");
		if (toastStack.length === 0) {
			setIsToastShelfOpen(false);
		}
	}, [toastStack, setIsToastShelfOpen]);

	return (
		<ol
			role="region"
			aria-live="polite"
			aria-label="notification"
			className={styles.wrapper}
		>
			{toastStack.map((toast) => (
				<li key={toast.id} className={styles.toastWrapper}>
					<Toast identifier={toast.id} variant={toast.variant}>
						{toast.message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default React.memo(ToastShelf);
