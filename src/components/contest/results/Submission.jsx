import React, { useCallback, useState } from 'react';
import moment from 'moment';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';
const Submission = ({ username, verdict, language, time, failedTestcase }) => {
  const [showModal,setShowModal] = useState(false);
  const setShowModalCallback = useCallback(()=>setShowModal(false),[])
  return (
    <>
      <tr>
        <td className='text-center'>{username}</td>
        <td className='text-center'>{language}</td>
        <td className='text-center'>{verdict}</td>
        <td className='text-center'>
          {moment(time, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("MMM D, YYYY HH:mm:ss")}
        </td>
        <td className='text-center'>
          { 
            (failedTestcase) && 
              <>
                <button className='bg-blue-600 rounded-md p-2' onClick={() => setShowModal(true)}>Check</button>
                {showModal && createPortal(
                  <ModalContent onClose={setShowModalCallback} failedTestcase={failedTestcase} />,
                  document.body
                )}
              </>
          }
        </td>
      </tr>
    </>
  );
};

export default Submission;
