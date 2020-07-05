import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51H1QxVAvGQgI5stYjGoR2BMGVB6JTtpkBaH5Jk0QHFLySQo4idkYGb4LFv0tf19oCNl1UYIhI425x2t7lOVfdcfk002Y0iqHCl';

const onToken=(token)=>{
    console.log(token);
    alert('payment successful')
}
    return(
        <StripeCheckout
            label="Pay Now"
            name='Hackon Clothing pvt.Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )

}

export default StripeCheckoutButton;