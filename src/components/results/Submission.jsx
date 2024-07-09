import React from 'react';

const Submission = ({ username, verdict, language, time }) => {
  return (
    <tr>
      <td className='text-center'>{username}</td>
      <td className='text-center'>{verdict}</td>
      <td className='text-center'>{language}</td>
      <td className='text-center'>{time}</td>
    </tr>
  );
};

export default Submission;
