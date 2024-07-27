import React, { useCallback,useReducer,useRef } from 'react'
import { useForm,Controller } from 'react-hook-form'
import {z} from 'zod'
import { Editor } from '@tinymce/tinymce-react'
import { zodResolver } from '@hookform/resolvers/zod'
// custom validators and Schema
import './changeInputTypeFile.css'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import useSession from '../../context/SessionContext'
import { useProblemQuery } from '../../hooks/useProblemQuery'
const ACCEPTED_ZIP_TYPES = ["application/zip"]

const problemSchema = z.object({
  problemStatement: z.string(),
  constraints: z.string(),
  input: z.string(),
  output: z.string(),
  sampleTestcase: z.string(),
  memory: z.number(),
  time: z.number(),
  title: z.string().min(3).max(50),
  difficulty: z.number().gte(1).lte(10),
  testcase: z
            .any()
            // .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
            .refine(
              (file) =>{
                console.log(file[0]);
                return ACCEPTED_ZIP_TYPES.includes(file[0]?.type)
              },
              "Only .zip formats are supported."
            ),
  answer: z
  .any()
  // .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  .refine(
    (file) =>{
      console.log(file[0]);
      return ACCEPTED_ZIP_TYPES.includes(file[0]?.type)
    },
    "Only .zip formats are supported."
  )
})

const ManageContestCreateProblem = () => {
  const {id,pid} = useParams();
  const {data:problemData,isLoading,error} = useProblemQuery(pid,{refetchOnWindowFocus:false});
  const {User} = useSession();
  const navigate = useNavigate();
  const problemStatementRef = useRef(null);
  const constraintsRef = useRef(null);
  const inputRef = useRef(null);
  const ouputRef = useRef(null);
  const sampleTestcaseRef = useRef(null);
  const { register, handleSubmit, control, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(problemSchema)
  }
  );
  const onSubmit = (data)=>{
    const onSuccess = () => toast.success("Problem Edited Successfully");
    const onError = (err) => toast.error(err);
    // data.contest = id;
    // data.username = User.username;
    const testcase = data.testcase[0];
    const answer = data.answer[0];
    delete data.testcase;
    delete data.answer;

    const formData = new FormData();

    formData.append('data', JSON.stringify(data));

    if (testcase) {
      formData.append('testcase', testcase);
    }
    if (answer) {
      formData.append('answer', answer);
    }
    fetch(`http://localhost:7700/api/problem/edit/${pid}`, {
      method: "POST",
      body: formData
    })
    .then(async (res)=>{
      const response = await res.json();
      if(res.ok){
        return response;
      }
      throw new Error(response.message);
    })
    .then((response)=>{
      onSuccess();
      // setTimeout(()=>{
      //   navigate(`/garage/contest/manage/${id}`);
      // },1000);
    })
    .catch((err)=>{
      onError(err);
    })
  } 
  if(isLoading) return <div>Loading ...</div>
  if(error) return <div>Request Failed</div>
  return (
    <form className='p-5 bg-[#03045e] flex flex-col justify-center items-start gap-6 outline-grey w-9/12 m-auto mt-10 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
      <div className='m-5'>
        <label className='mr-5 text-white text-xl font-bold' htmlFor="title">Title : </label>
        <input defaultValue={problemData.title} className='text-white border bg-[#023e8a] rounded-md p-1 pl-4'
          {...register("title")}
          name='title' type="text" />
          {errors.title && (
            <div className='text-red-500'>{errors.title.message}</div>
          )}
      </div>
      <div className='w-full m-5'>
         <label className='mr-5 text-white text-xl font-bold' htmlFor='problemStatement'>Problem Statement : </label>
         <Controller
            name="problemStatement"
            control={control}
            render={({field: {ref,...field}}) => (
              <div className='w-1/2'>
                <Editor
                    apiKey="dms9mfu4v0w11nkg5nl3bc5yf9rwb1oml1qot8yesdvzlwn5"
                    onInit={(evt, editor) => problemStatementRef.current = editor}
                    initialValue={problemData.problemStatement}
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
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={(val,editor)=>{
                      setValue("problemStatement",val);
                    }}
                />
              </div>
          )}
         />
         {errors.problemStatement && <span className='text-red-600'>{errors.problemStatement.message}</span>}
      </div>      
      <div className='w-full m-5'>
         <label className='mr-5 text-white text-xl font-bold' htmlFor='input'>Input Format : </label>
         <Controller
            name="input"
            control={control}
            render={({field: {ref,...field}}) => (
              <div className='w-1/2'>
                <Editor
                    apiKey="dms9mfu4v0w11nkg5nl3bc5yf9rwb1oml1qot8yesdvzlwn5"
                    onInit={(evt, editor) => inputRef.current = editor}
                    initialValue={problemData.input}
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
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={(val,editor)=>{
                      setValue("problemStatement",val);
                    }}
                />
              </div>
          )}
         />
         {errors.problemStatement && <span className='text-red-600'>{errors.problemStatement.message}</span>}
      </div>
      <div className='w-full m-5'>
         <label className='mr-5 text-white text-xl font-bold' htmlFor='output'>Output Format : </label>
         <Controller
            name="output"
            control={control}
            render={({field: {ref,...field}}) => (
              <div className='w-1/2'>
                <Editor
                    apiKey="dms9mfu4v0w11nkg5nl3bc5yf9rwb1oml1qot8yesdvzlwn5"
                    onInit={(evt, editor) => ouputRef.current = editor}
                    initialValue={problemData.output}
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
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={(val,editor)=>{
                      setValue("problemStatement",val);
                    }}
                />
              </div>
          )}
         />
         {errors.problemStatement && <span className='text-red-600'>{errors.problemStatement.message}</span>}
      </div>
      <div className='w-full m-5'>
         <label className='mr-5 text-white text-xl font-bold' htmlFor='sampleTestcase'>Sample TestCases : </label>
         <Controller
            name="sampleTestcase"
            control={control}
            render={({field: {ref,...field}}) => (
              <div className='w-1/2'>
                <Editor
                    apiKey="dms9mfu4v0w11nkg5nl3bc5yf9rwb1oml1qot8yesdvzlwn5"
                    onInit={(evt, editor) => sampleTestcaseRef.current = editor}
                    initialValue={problemData.sampleTestcase}
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
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={(val,editor)=>{
                      setValue("problemStatement",val);
                    }}
                />
              </div>
          )}
         />
         {errors.problemStatement && <span className='text-red-600'>{errors.problemStatement.message}</span>}
      </div>
      <div className='w-full m-5'>
         <label className='mr-5 text-white text-xl font-bold' htmlFor='constraints'>Constraints : </label>
         <Controller
            name="constraints"
            control={control}
            render={({field: {ref,...field}}) => (
              <div className='w-1/2'>
                <Editor
                    apiKey="dms9mfu4v0w11nkg5nl3bc5yf9rwb1oml1qot8yesdvzlwn5"
                    onInit={(evt, editor) => constraintsRef.current = editor}
                    initialValue={problemData.constraints}
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
          )}
         />
         {errors.problemStatement && <span className='text-red-600'>{errors.problemStatement.message}</span>}
      </div>
      <div className='m-5'>
          <label className='mr-5 text-white text-xl font-bold' htmlFor="memory">Memory : </label>
          <input className='text-white border bg-[#023e8a] rounded-md p-1 pl-4' 
          {...register("memory",{
            valueAsNumber:true
          })}
          defaultValue={problemData.memory}
          name='memory' type="number" />
          {errors.memory && (
            <div className='text-red-500'>{errors.memory.message}</div>
          )}
      </div>
      <div className='m-5'>
          <label className='mr-5 text-white text-xl font-bold' htmlFor="time">Time : </label>
          <input className='text-white border bg-[#023e8a] rounded-md p-1 pl-4' 
          {...register("time",{
            valueAsNumber:true
          })}
          defaultValue={problemData.time}
          name='time' type="number" />
          {errors.time && (
            <div className='text-red-500'>{errors.time.message}</div>
          )}
      </div>
      <div className='m-5'>
          <label className='mr-5 text-white text-xl font-bold' htmlFor="difficulty">Difficulty : </label>
          <input className='text-white border bg-[#023e8a] rounded-md p-1 pl-4' 
          {...register("difficulty",{
            valueAsNumber:true
          })}
          defaultValue={problemData.difficulty}
          name='difficulty' type="number" />
          {errors.difficulty && (
            <div className='text-red-500'>{errors.difficulty.message}</div>
          )}
      </div>
      <div className='m-5'>
        <label className='mr-5 text-white text-xl font-bold' htmlFor="difficulty">Upload a zip of testcases : </label>
        <input className='text-white border bg-[#023e8a] rounded-md p-1 pl-4' 
        {...register("testcase")}
        name='testcase' type="file" />
        {errors.testcase && (
            <div className='text-red-500'>{errors.testcase.message}</div>
        )}
      </div>
      <div className='m-5'>
            <label className='mr-5 text-white text-xl font-bold' htmlFor="difficulty">Upload a zip of answers : </label>
            <input className='text-white border bg-[#023e8a] rounded-md p-1 pl-4' 
            {...register("answer")}
            name='answer' type="file" />
            {errors.testcase && (
                <div className='text-red-500'>{errors.answer.message}</div>
            )}
      </div>
      <button
      className='m-5 bg-[#0077b6] rounded-xl p-3 w-40'
      type='submit'
      onClick={() => {
        setValue(
          "problemStatement",
          problemStatementRef.current.getContent({ format: "html" })
        );
        setValue(
          "constraints",
          constraintsRef.current.getContent({ format: "html" })
        );
        setValue(
          "input",
          inputRef.current.getContent({ format: "html" })
        );
        setValue(
          "output",
          ouputRef.current.getContent({ format: "html" })
        );
        setValue(
          "sampleTestcase",
          sampleTestcaseRef.current.getContent({ format: "html" })
        );
      }}>Edit</button>
      {errors && console.log(errors)}
    </form>
  )
}

export default ManageContestCreateProblem