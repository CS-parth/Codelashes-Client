import React from 'react';
import moment from 'moment';
const Submission = ({ username, verdict, language, time }) => {
  return (
    <tr>
      <td className='text-center'>{username}</td>
      <td className='text-center'>{language}</td>
      <td className='text-center'>{verdict}</td>
      <td className='text-center'>
        {moment(time, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("MMM D, YYYY HH:mm:ss")}
      </td>
    </tr>
  );
};

export default Submission;
