import React from 'react';

const Footer = () => {
	return (
		<footer className='w-full mt-auto bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-5 dark:bg-gray-800 dark:border-gray-600'>
			<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
				<a href='' className='hover:underline'>
					© 2023 Wgg™
				</a>
				. All Rights Reserved.
			</span>

			<ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
				<li>
					<a href='#' className='mr-4 hover:underline md:mr-6 '>
						About
					</a>
				</li>

				<li>
					<a href='#' className='mr-4 hover:underline md:mr-6'>
						Privacy Policy
					</a>
				</li>

				<li>
					<a href='#' className='mr-4 hover:underline md:mr-6'>
						Contact
					</a>
				</li>
				<li>
					<select
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						name='language'
						id='language'
					>
						<option value='english'>English</option>
						<option value='espanol'>Espanol</option>
					</select>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
