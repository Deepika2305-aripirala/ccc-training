export default function ListCard({ data, onDelete }){
    function handleDelete(){
        onDelete(data._id);
    }
    return(
        <>
            <div className="flex justify-between px-2 py-4 bg-gray-300 gap-5 mb-1">
                <div>{data.name}</div>
                <div>
                    <button className="hover:cursor-pointer border-gray-500 border-2 mx-2 px-4 py-2">Edit</button>
                    <button className="hover:cursor-pointer border-gray-500 border-2 mx-2 px-4 py-2" 
                    onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </>
    );
}