import React from 'react';
import Footer from '../Footer/Footer';
import './container.css';

const Container = ({ children }) => {
	return (
		<div className='container-background flex flex-col h-full'>
			{children}
			<Footer />
		</div>
	);
};

export default Container;
