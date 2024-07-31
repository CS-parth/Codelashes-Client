import { useEffect, useRef } from 'react';
import { CopyBlock,dracula } from 'react-code-blocks';
export default function ModalContent({ onClose,failedTestcase }) {
    const modalRef = useRef(null);
    useEffect(()=>{
        const handleWindowClick = (event)=>{
            if(modalRef.current && !modalRef.current?.contains(event.target)){
                onClose();
            }
        }
        document.addEventListener('click',handleWindowClick,true);
        return ()=>{
            document.removeEventListener('click',handleWindowClick,true);
        };
    },[onClose]);
    return (
      <div ref={modalRef} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-700 rounded-md p-5">
        <div>
            <CopyBlock
                text={failedTestcase}
                theme={dracula}
                codeBlock
            />
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }