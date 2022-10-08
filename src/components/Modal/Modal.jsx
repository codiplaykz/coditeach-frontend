//Modal.js

import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.css';

const Modal = ({ modalStyle, children, show, onClose }) => {
	const modalRef = useRef(null);
	useEffect(
		() => {
			if (show) {
				modalRef.current.classList.add(styles.visible);
			}
			else {
				modalRef.current.classList.remove(styles.visible);
			}
		},
		[
			show
		]
	);
	return (
		<React.Fragment>
			<div ref={modalRef} className={`${styles.modal__wrap}`} onClick={onClose}>
				<div style={modalStyle} className={styles.modal}>
					{children}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Modal;

Modal.propTypes = {
	children: PropTypes.object,
	show: PropTypes.bool,
	modalStyle: PropTypes.string,
	onClose: PropTypes.object
};
