export default function Header(){
    return(
        <>
            <div className=" flex  gap-5">
                <div className="font-bold text-4xl  mx-10 my-5">
                    EverTrust
                </div>
                <div className="flex justify-between ">
                    <div className="px-5 py-5 mx-3 my-3">
                        Home
                    </div>
                    <div className="px-5 py-5 mx-3 my-3">
                        Properties
                    </div>
                    <div className="px-5 py-5 mx-3 my-3">
                        About
                    </div>
                    <div className="px-5 py-5 mx-3 my-3">
                        Agent
                    </div>
                    <div className="px-5 py-5 mx-3 my-3">   
                        Blog
                    </div>
                    <div className="px-5 py-5 mx-3 my-3">
                        Contact 
                    </div>
                </div>
                <div className="flex w-full justify-end mx-5 my-4">
                    <button className="bg-black text-white px-5  rounded-lg">Take to an Agent</button>
                </div>
            </div>
        </>
    );
}
