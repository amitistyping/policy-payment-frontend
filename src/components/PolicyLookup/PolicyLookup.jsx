import React, { useEffect, useState } from 'react';
import CustomerLookupForm from './CustomerLookupForm';
import GCLookupForm from './GCLookupForm';
import Container from '../Layout/Container/Container';
import './policylookup.css';

const PolicyLookup = () => {
	const [gcLookup, setGCLookup] = useState(false);

	return (
		<main className='w-full h-full flex justify-center items-center'>
			{gcLookup ? <GCLookupForm /> : <CustomerLookupForm />}
		</main>
	);
};

export default PolicyLookup;
