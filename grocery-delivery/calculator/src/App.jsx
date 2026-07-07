import {useState} from 'react';

export default function App(){
  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [result,setResult] = useState(0);
  function add(){
    setResult(num1+num2);
  }
  function sub(){
    setResult(num1-num2);
  }
  function mul(){
    setResult(num1*num2);
  }
  function div(){
    setResult(num1/num2);
  }
  function mod(){
    setResult(num1%num2);
  }
  function pow(){
    setResult(num1**num2);
  }
    function clear(){
    setResult(0);
    setNum1("");
    setNum2("");
  }
  return (
    <>
      <div className='flex w-full h-screen justify-center items-center'>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <div className='flex flex-col p-10 gap-5'>
            <div className='bg-blue-200'>
              <input  type='number' placeholder='Enter number 1' className='w-full px-5 py-4 font-mono text-2xl'
              onChange={(e)=>setNum1(Number(e.target.value))}
              value={num1}
              />
            </div>
            <div className=' bg-blue-200 '>
              <input  type='number' placeholder='Enter number 2' className='w-full px-5 py-4 font-mono text-2xl'
              onChange={(e)=>setNum2(Number(e.target.value))}
              value={num2}/>
            </div>
            
            <div className='flex  flex-row gap-5'>
              <button className='px-5 py-4 font-mono text-2xl border-2 border-gray-200' onClick={add}>
                +
              </button>
              <button className='px-5 py-4 font-mono text-2xl border-2 border-gray-200' onClick={sub}>
                -
              </button>
              <button className='px-5 py-4 font-mono text-2xl border-2 border-gray-200' onClick={mul}>
                *
              </button>
              <button className='px-5 py-4 font-mono text-2xl border-2 border-gray-200' onClick={div}>
                /
              </button>
              <button className='px-5 py-4 font-mono text-2xl border-2 border-gray-200' onClick={mod}>
                %
              </button>
              <button className='px-5 py-4 font-mono text-2xl border-2 border-gray-200' onClick={pow}>
                ^
              </button>
            </div>
            <div className='flex justify-center text-4xl font-bold '>
              <button onClick={clear} className='bg-green-300 px-5 py-5 rounded-lg '>Clear</button>
            </div>
          </div>
        </div>
            
        <div className='text-7xl bg-blue-100 px-3 py-1 rounded-lg'>
          {result}
        </div>
        
      </div>
    </>
  );
}