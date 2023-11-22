import React from 'react';
import SetUserReview from '../../../hooks/SetUserReview';

const SetReview = () => {
    const [review, refetch] = SetUserReview()
    return (
        <div className=' mt-3'>
            {
                review.map(item => <div className="p-3 rounded-lg shadow-md flex items-center space-x-3">
                    <img
                        src={item.photo}
                        alt=''
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">{item.name}</p>
                        <p className="text-gray-700">{item.review}</p>
                    </div>
                    <div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SetReview;