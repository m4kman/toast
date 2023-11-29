import React from "react";
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from "react-feather";

import { ToastContext } from "../ToastProvider";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ identifier, children, variant }) {
	const { toastStack, setToastStack } = React.useContext(ToastContext);
	const [isOpen, setIsOpen] = React.useState(true);
	const IconTag = ICONS_BY_VARIANT[variant];

	function handleDismiss() {
		const newToastStack = toastStack.filter(({ id }) => id !== identifier);
		setToastStack(newToastStack);
		setIsOpen(false);
	}

	return (
		isOpen && (
			<div className={`${styles.toast} ${styles[variant]}`}>
				<div className={styles.iconContainer}>
					<IconTag size={24} />
				</div>
				<p className={styles.content}>
					<VisuallyHidden>{variant}</VisuallyHidden>
					{children}
				</p>
				<button
					type="button"
					className={styles.closeButton}
					onClick={handleDismiss}
					aria-label="Dismiss message"
					aria-live="off"
				>
					<X size={24} />
				</button>
			</div>
		)
	);
}

export default Toast;