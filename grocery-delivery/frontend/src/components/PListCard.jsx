export default function PListCard({ data, onDelete, onEdit }) {
  return (
    <div className="flex justify-between items-center px-4 py-4 bg-gray-50 rounded mb-2 shadow-sm">
      <div>
        <h2 className="font-semibold text-lg">{data.productId}</h2>
        <p className="text-sm text-gray-500">{data.name}</p>
        <p className="text-sm">{data.price}</p>
      </div>

      <div className="flex gap-2">
        <button
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
          onClick={() => onEdit(data._id)}
        >
          Edit
        </button>

        <button
          className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition"
          onClick={() => onDelete(data._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}