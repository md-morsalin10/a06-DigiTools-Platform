import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingSection = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    
    
    return (
        <div className='max-w-7xl mx-auto p-8 py-10 lg:py-20'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl lg:text-5xl font-bold text-[#101727]'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-15'>
                {
                    pricingData.map(card => <PricingCard key={card.id} card={card}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingSection;