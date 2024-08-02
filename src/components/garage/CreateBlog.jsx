import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Textarea } from '@headlessui/react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const CreateBlog = () => {
  const navigate = useNavigate();
  const {pid} = useParams();
  const blogEditorRef = useRef(null);
  const [blog,setBlog] = useState();
  const [title,setTitle] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("first");
    const onSuccess = () => {toast.success("Blog Created Successfully")}
    const onError = (msg) => {toast.error(msg)}
    fetch("https://codelashes-server.onrender.com/api/blog/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({content: blog,title: title})
    })
    .then(async res=>{
        const response = await res.json();
        if(res.ok){
          return response;
        }
        throw new Error(response.message);
    })
    .then(data=>{
      onSuccess();
      // navigate("../manage"); 
    })
    .catch(err=>{
      console.log(err);
      onError(err.message);
    })
  }
  return (
    <div className='w-9/12 m-auto'>
        <h1 className='text-center mt-5 text-2xl bg-gray-600 rounded-t-md mb-10'>Blog Details</h1>
        <form className='p-5 bg-black opacity-60 flex flex-col justify-center items-start gap-6 outline-grey w-full m-auto mt-10 rounded-lg mb-10' >
            <div className='m-5'>
              <label className='mr-5 text-white text-xl font-bold'>Title : </label>
              <input className='text-white border bg-gray-800 rounded-md p-1 pl-4' type="text" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='m-5'>
                <label className='mr-5 text-white text-xl font-bold' htmlFor="content">Content : </label>
                <Editor
                    apiKey="dms9mfu4v0w11nkg5nl3bc5yf9rwb1oml1qot8yesdvzlwn5"
                    onInit={(evt, editor) => blogEditorRef.current = editor}
                    value={blog}
                    onEditorChange={(data) => setBlog(data)}
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