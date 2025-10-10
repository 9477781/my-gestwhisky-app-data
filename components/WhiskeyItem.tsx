
import React from 'react';

const WhiskeyItem: React.FC<{ whiskey: string }> = ({ whiskey }) => {
    return (
        <li className="flex items-start py-1">
            <span className="text-[#bfa045] mr-3 mt-1 text-lg">&#9679;</span>
            <span className="flex-1">{whiskey}</span>
        </li>
    );
};

export default WhiskeyItem;