
import React from 'react';
import type { Store } from '../types';
import WhiskeyItem from './WhiskeyItem';

const LocationPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2 text-[#000033]/80" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);


const StoreCard: React.FC<{ store: Store }> = ({ store }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-gray-200/60">
            <div className="p-6">
                <h4 className="text-2xl sm:text-3xl font-bold text-[#000033] mb-4 pl-4 border-l-4 border-[#bfa045]">
                    <a href={store.url} className="hover:text-[#bfa045] transition-colors flex items-center">
                        <LocationPinIcon />
                        <span>{store.name}</span>
                    </a>
                </h4>
                <ul className="space-y-2 text-gray-700 text-xl">
                    {store.whiskeys.map((whiskey, index) => (
                        <WhiskeyItem key={index} whiskey={whiskey} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StoreCard;
