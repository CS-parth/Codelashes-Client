import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Textarea } from '@headlessui/react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const CreateBlog = () => {
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
        <h1 className='text-center mt-5 text-2xl bg-gray-600 rounded-t-md mb-10'>Blog Details</h1>
        <form>
            <div>
                <Editor
                    apiKey="dms9mfu4v0w11nkg5nl3bc5yf9rwb1oml1qot8yesdvzlwn5"
                    onInit={(evt, editor) => solutionRef.current = editor}
                    value={solution}
                    onEditorChange={(data) => setSolution(data)}
                    init={{
                      height: 600,
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
            <button className='m-5 bg-blue-950 bg-opacity-60 text-white rounded-xl p-3 w-40' type='submit' type='submit' onClick={handleSubmit}>Create</button>
        </form>
    </div>
  )
}

export default CreateBlog