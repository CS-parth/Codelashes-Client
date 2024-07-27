import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Textarea } from '@headlessui/react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const ManageContestAddEditorial = () => {
  const {pid} = useParams();
  const solutionRef = useRef(null); 
  const [solution,setSolution] = useState("");
  const [code,setCode] = useState("");
  const [language,setLanguage] = useState('C');

const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess = ()=>toast.success("Editorial Added Succeddfully");
    const onError = (msg)=>toast.error(msg);
    fetch(`http://localhost:7700/api/problem/editorial/${pid}`,{
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({code:code,language:language,solution:solution})
    })
    .then(async (res)=>{
      const response = await res.json();
      if(res.ok){
        return response;
      }
      throw new Error(response.message);
    })
    .then((data)=>{
      onSuccess();
    })
    .catch((err)=>{
      onError(err.message);
    })
};
  return (
    <div className='w-9/12 m-auto'>
        <form>
            <div>
                <label htmlFor='solution'>Solution : </label>
                <Editor
                    apiKey="dms9mfu4v0w11nkg5nl3bc5yf9rwb1oml1qot8yesdvzlwn5"
                    onInit={(evt, editor) => solutionRef.current = editor}
                    value={solution}
                    onEditorChange={(data) => setSolution(data)}
                    init={{
                      height: 200,
                      menubar: false,
                      plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                      ],
                      toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }'
                    }}
                />
            </div>
            <div>
                <label htmlFor='code'>Code : </label>
                <Textarea name='code'
                value={code}
                onChange={(data) => setCode(data.target.value)}/>
            </div>
            <div>
                <label htmlFor="language">Language : </label>
                <select value={language} 
                  onChange={(data)=>setLanguage(data.target.value)} 
                  name="language" id="language"
                >
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="Pythom">Python</option>
                </select>
            </div>
            <button type='submit' onClick={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default ManageContestAddEditorial