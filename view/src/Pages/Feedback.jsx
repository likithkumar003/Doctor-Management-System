import React, { useState } from 'react';

export const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([
    'I had a positive experience at this hospital. The staff was attentive, and the facilities were well-maintained. Overall, my stay here contributed to my recovery, and I feel much better.',
    "The hospital provided excellent care during my visit. The medical staff was professional and compassionate. The positive atmosphere and quality service played a crucial role in my recovery, and I'm grateful for the overall positive experience.",
    "I found this hospital to be quite good. The medical team was efficient, and the facilities were up to par. My health improved during my time here, and I appreciate the efforts of the hospital staff in making me feel better.",
  ]);

  const addFeedback = () => {
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, feedback]);
    setFeedback(''); // Clear the input field after adding feedback
  };

  return (
    <div>
      <div className=''>
        <p className='text-center text-2xl py-10 text-green-600'>FEEDBACK</p>
      </div>
      <div className='flex justify-end pr-10'>
        <input
          className='border-[1px] border-green-600 p-2'
          type='text'
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button onClick={addFeedback} className='border-[1px] p-2'>
          Add Feedback
        </button>
      </div>
      <div className='p-10'>
        {feedbacks.map((feedback, index) => (
          <p key={index} className='py-3 text-xl border-[1px] px-5 my-2'>
            {feedback}
          </p>
        ))}
      </div>
    </div>
  );
};
