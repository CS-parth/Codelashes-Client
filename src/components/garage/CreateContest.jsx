import {React,useCallback,useRef} from 'react'
import { useForm,Controller } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import moment from 'moment';
import './fixInput.css';
import Multiselect from 'multiselect-react-dropdown';
import { useSettersQuery } from '../../hooks/useSetters';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const isValidDate = (date)=>{
  const contestDate = moment(date).startOf('day');
  const currentDate = moment().startOf('day');
  const dateDiff = currentDate.diff(contestDate,'days');
  if(dateDiff > 0){
    return false;
  }
  return true;
}

const isValidTime = (time,date)=>{
  const [hours,minutes] = time.split(':').map(Number);
  const contestTime = moment(date).set({hours,minutes,seconds:0});
  const currentTime = moment();
  const timeDiff = contestTime.diff(currentTime,'minutes');
  if(timeDiff < 60) return false;
  return true;
}

const contestSchema = z.object({
  contestName: z.string().min(4).max(50),
  startDate: z.date()
              // .refine(
              //   date=>isValidDate(date),
              //   {message: 'The contest date can not be in past'}
              // )
              ,
  startTime: z.string(),
  setters: z.array(z.object({
    value: z.string(),
    name: z.string(),
    id: z.string()
  })),
  duration: z.string(),
  description: z.string().min(10).max(100),
  rules: z.string().min(10).max(100) 
})
// .refine(
//   (data) => isValidTime(data.startTime,data.startDate),
//   {
//     message: 'At least need 1 hour gap before the start of the contest',
//     path: ['startTime']
//   }
// )

// const objectArray = ["Apple","Banana","Grapes","Papaya"];

const CreateContest = () => {
  const { data, error, isLoading } = useSettersQuery({});
  const contestSubmit = useRef(null);
  const navigate = useNavigate();
  const { register, handleSubmit, control, setValue, watch, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(contestSchema)
  }
  );
  const onSubmit = (data)=>{
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server-lcxc.onrender.com'
    : 'http://localhost:7700';
    const onSuccess = () => toast.success("Contest Created Successfully",{theme:"light",autoClose:2000});
    const onError = (err) => toast.error(err,{autoClose:2000}); 

    const formData = {
      "name": "",
      "setters": [],
      "startDate": "",
      "startTime": "",
      duration: "",
      description: "",
      rules: ""
    }
    formData.name = data.contestName;
    formData.setters = data.setters.map((elem)=>elem.id);
    formData.duration = data.duration;
    formData.startDate = data.startDate;
    formData.startTime = data.startTime;
    formData.description = data.description;
    formData.rules = data.rules;
    fetch(`${API_URL}/api/contest/create`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(formData),
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
      setTimeout(()=>{
        navigate(`/garage/contest/manage/${data.id}`);
      },1000);
    })
    .catch((err)=>{
      onError(err.message);
    })
  } 

  if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;

  return (
    <>
    <div className='mt-5 flex flex-col justify-center items-center font-extrabold text-2xl bg-gray-600 w-9/12 m-auto rounded-t-md'>Contest Details</div>
        <form className='p-5 bg-black opacity-60 flex flex-col justify-center items-start gap-6 outline-grey w-9/12 m-auto mt-10 rounded-lg mb-10' onSubmit={handleSubmit(onSubmit)}>
            <div className='m-5'>
              <label className='mr-5 text-white text-xl font-bold' htmlFor="contestName">Name of the Contest : </label>
              <input className='text-white border bg-gray-800 rounded-md p-1 pl-4' name='contestName' 
              {...register("contestName")}
                aria-invalid={errors.contestName ? "true" : "false"}
              />
              {errors.contestName && (
                <div className='text-red-500'>{errors.contestName.message}</div>
              )}
            </div>
            <div className='m-5'>
              <label className='mr-5 text-white text-xl font-bold' htmlFor="startDate">Start Date : </label>
              <input className='text-white border bg-gray-800 rounded-md p-1 pl-4' type='date' name="startDate" 
              {...register("startDate",{
                valueAsDate:true
              })}
              />
              <span className='ml-5 mr-5 text-white' >  at  </span>         
              <select className='w-20 text-center text-white border bg-gray-800 rounded-md' name="startTime" {...register("startTime")}>
              <option value="00:00">00:00</option>
              <option value="00:30">00:30</option>
              <option value="01:00">01:00</option>
              <option value="01:30">01:30</option>
              <option value="02:00">02:00</option>
              <option value="02:30">02:30</option>
              <option value="03:00">03:00</option>
              <option value="03:30">03:30</option>
              <option value="04:00">04:00</option>
              <option value="04:30">04:30</option>
              <option value="05:00">05:00</option>
              <option value="05:30">05:30</option>
              <option value="06:00">06:00</option>
              <option value="06:30">06:30</option>
              <option value="07:00">07:00</option>
              <option value="07:30">07:30</option>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
              <option value="22:00">22:00</option>
              <option value="22:30">22:30</option>
              <option value="23:00">23:00</option>
              <option value="23:30">23:30</option>
              
              </select>
              {errors.startDate ? (
                <div className='text-red-500'>{errors.startDate.message}</div>
              ) : errors.startTime ? (
                <div className='text-red-500'>{errors.startTime.message}</div>
              ) : <div className='display-none'></div>}
            </div>
            <div className='m-5'>
              <label className='mr-5 text-white text-xl font-bold' htmlFor="duration">Duration : </label>
              <select className='w-20 text-center text-white border bg-gray-800 rounded-md' name="duration" {...register("duration")}>
                <option value="00:05">00:05</option>
                <option value="00:10">00:10</option>
                <option value="00:30">00:30</option>
                <option value="01:00">01:00</option>
                <option value="01:30">01:30</option>
                <option value="02:00">02:00</option>
                <option value="02:30">02:30</option>
                <option value="03:00">03:00</option>
                <option value="03:30">03:30</option>
                <option value="04:00">04:00</option>
                <option value="04:30">04:30</option>
                <option value="05:00">05:00</option>              
              </select>
              {errors.duration && (
                <div className='text-red-500'>{errors.duration.message}</div>
              )}
            </div>
            <div className='flex flex-row items-center justify-center m-5'>
                <label className='mr-5 text-white text-xl font-bold' htmlFor="setters"> Setters : </label>
                <Controller
                  name="setters"
                  control={control}
                  rules={{required:true}}
                  render={({field: {ref,...field}})=>{
                    return(
                      <div> 
                            <Multiselect
                              style={ {chips: { background: "#023e8a" }, searchBox: { border: "none", "borderBottom": "1px solid gray", "borderRadius": "0px" } }}
                              {...field}
                              inputRef={ref}
                              displayValue="name"
                              onSelect={(selected, item) => {
                                setValue("setters", selected);
                              }}
                              onRemove={(selected, item) => {
                                setValue("setters", selected);
                              }}
                              options={data.map((setter)=>({
                                value: setter.username,
                                name: setter.username,
                                id: setter._id
                              }))}

                          />
                    </div>
                    );
                  }}
                  />
                  {errors.setters && (
                    <div className='text-red-500'>{errors.setters.message}</div>
                  )}    
            </div>
            <div className='m-5'>
              <div className='flex items-center w-full'>
                <label className='mr-5 text-white text-xl font-bold w-1/2' htmlFor="description">Description : </label>
                <textarea className='text-white border bg-gray-800 rounded-md p-1 pl-4 w-3/5' name='description' {...register("description")}/>
              </div>
              {errors.description && (
                <div className='text-red-500'>{errors.description.message}</div>
              )}
            </div>
            <div className='m-5'>
              <div className='flex items-center w-full'>
                <label className='mr-5 text-white text-xl font-bold' htmlFor="rules">Rules : </label>
                <textarea className='text-white border bg-gray-800 rounded-md p-1 pl-4 w-3/5' name='rules' {...register("rules")}/>
              </div>
                {errors.rules && (
                  <div className='text-red-500'>{errors.rules.message}</div>
                )}
            </div>
            <button className='m-5 bg-blue-950 bg-opacity-100 text-white rounded-xl p-3 w-40' type='submit'>Submit</button>
        </form>
    </> 
  )
}

export default CreateContest