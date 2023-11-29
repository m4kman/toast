import React from "react";

import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider";
import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const {
		message,
		setMessage,
		variant,
		setVariant,
		isToastShelfOpen,
		handleSubmit,
	} = React.useContext(ToastContext);

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			{isToastShelfOpen && <ToastShelf />}

			<form onSubmit={handleSubmit} className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{
							alignSelf: "baseline",
						}}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((type) => (
							<label key={type} htmlFor={`variant-${type}`}>
								<input
									id={`variant-${type}`}
									type="radio"
									name="variant"
									checked={variant === type}
									value={type}
									onChange={(e) => setVariant(e.target.value)}
								/>
								{type}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button type="submit">Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
