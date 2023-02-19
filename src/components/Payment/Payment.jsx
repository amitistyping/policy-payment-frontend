import React from 'react';
import PaymentForm from './PaymentForm';

const Payment = () => {
	return (
		<div id='paymentWrapper' className='w-full h-full flex justify-center'>
			<div id='paymentContainer' className='w-4/6 bg-gray-50 flex flex-col items-center p-10'>
				<div id='paymentCompanyLogo'>Logo here</div>
				<div id='paymentHeader'>You have elected to pay premium in full</div>
				<div id='paymentHeaderDescription'>
					Input1 billing service is an electronic payment service company. We will collect your
					payment and forward it your insurance carrier. Please note that payments made via credit
					card will bear a convenience fee. ACH payments can be made at no cost.
				</div>
				<div id='paymentFormContainer'>
					<PaymentForm />
				</div>
			</div>
		</div>
	);
};

export default Payment;
