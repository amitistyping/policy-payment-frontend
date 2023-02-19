import React from 'react';
import { Formik } from 'formik';

const CustomerLookupForm = () => {
	return (
		<div id='gcLookupForm' className='w-2/5'>
			<Formik
				initialValues={{ gcAccountNumber: '' }}
				validate={(values) => {
					const errors = {};
					if (!values.gcAccountNumber) {
						errors.gcAccountNumber = 'Required';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
					<form onSubmit={handleSubmit}>
						<div class='grid gap-6 mb-3 md:grid-cols-2'>
							<div>
								<label
									for='gcAccountNumber'
									className='block mb-2 text-lg font-large text-gray-900 dark:text-white'
								>
									Last name
								</label>
								<input
									className='border border-gray-300 text-sm rounded-lg block w-full p-2.5'
									type='text'
									name='gcAccountNumber'
									onChange={handleChange}
									value={values.gcAccountNumber}
								/>
								{errors.gcAccountNumber && touched.gcAccountNumber && errors.gcAccountNumber}
							</div>
							<div>
								<label
									for='gcAccountNumber'
									className='block mb-2 text-lg font-large text-gray-900 dark:text-white'
								>
									Last four phone digits
								</label>
								<input
									className='border border-gray-300 text-sm rounded-lg block w-full p-2.5'
									type='text'
									name='gcAccountNumber'
									onChange={handleChange}
									value={values.gcAccountNumber}
								/>
								{errors.gcAccountNumber && touched.gcAccountNumber && errors.gcAccountNumber}
							</div>
							<div>
								<label
									for='gcAccountNumber'
									className='block mb-2 text-lg font-large text-gray-900 dark:text-white'
								>
									Covered property street number
								</label>
								<input
									className='border border-gray-300 text-sm rounded-lg block w-full p-2.5'
									type='text'
									name='gcAccountNumber'
									onChange={handleChange}
									value={values.gcAccountNumber}
								/>
								{errors.gcAccountNumber && touched.gcAccountNumber && errors.gcAccountNumber}
							</div>
							<div>
								<label
									for='gcAccountNumber'
									className='block mb-2 text-lg font-large text-gray-900 dark:text-white'
								>
									Covered property zip code
								</label>
								<input
									className='border border-gray-300 text-sm rounded-lg block w-full p-2.5'
									type='text'
									name='gcAccountNumber'
									onChange={handleChange}
									value={values.gcAccountNumber}
								/>
								{errors.gcAccountNumber && touched.gcAccountNumber && errors.gcAccountNumber}
							</div>
						</div>
						<button
							disabled={isSubmitting}
							type='submit'
							class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-lg px-10 py-2.5 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
						>
							Submit
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default CustomerLookupForm;
