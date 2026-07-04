//import Hello from "../component/Hello";
/*
function App() {
  return (
    <>
    <div className=" flex h-screen bg-amber-200 justify-center items-center">
      <div className=" bg-white flex flex-col p-5 rounded-lg gap-2">
        <input
          className=" bg-gray-100 px-3 py-1 rounded-lg" type="text" placeholder="Username"
        />
        <input 
          className=" bg-gray-100 px-3 py-1 rounded-lg" type="text" placeholder="Email"
        />
        <input 
          className=" bg-gray-100 px-3 py-1 rounded-lg" type="password" placeholder=" Password"
        />
        <input
          className=" bg-gray-100 px-3 py-1 rounded-lg" type="password" placeholder="Confirm password"
        />

        <button className=" bg-blue-300 px-3 py-1 rounded-lg">
          Sign Up / Register
        </button>
      </div>
    </div>
    </>
      
  );
}

export default App;
*/

export default function App(){
  return (
    <>
    <div className="flex w-full justify-between px-5 py-4">
      <div>LOGO</div>
      <div className=" flex">
        <div className=" hover:bg-red-200 hover: hover:text-red-600 px-2 py-1 hover:rounded-lg">
          Home
        </div>
        <div className=" hover:bg-red-200 hover: hover:text-red-600 px-2 py-1 hover:rounded-lg">
          About
        </div>
        <div className=" hover:bg-red-200 hover: hover:text-red-600 px-2 py-1 hover:rounded-lg">
          Serivce
        </div>
        <div className=" hover:bg-red-200 hover: hover:text-red-600 px-2 py-1 hover:rounded-lg">
          Blog
        </div>
        <div className=" hover:bg-red-200 hover: hover:text-red-600 px-2 py-1 hover:rounded-lg">
          Contact
        </div>
      </div>
      </div>
    </>
  );
}