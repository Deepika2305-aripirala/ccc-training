export default function OrderCard({ data,onDelete,onEdit }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-3">
      <h2 className="text-lg font-semibold">
        Customer: {data.user.name}
      </h2>

      <div className="mt-3">
        <h3 className="font-medium">Products</h3>

        {data.products.map((item) => (
          <div
            key={item.product._id}
            className="flex justify-between border-b py-2"
          >
            <span>{item.product.name}</span>

            <span>Qty : {item.quantity}</span>

            <span>₹ {item.product.price}</span>
          </div>
        ))}
        <div className="flex gap-2 mt-4">
        <button
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          onClick={() => onEdit(data._id)}
        >
          Edit
        </button>

        <button
          className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white"
          onClick={() => onDelete(data._id)}
        >
          Delete
        </button>
      </div>
      </div>
    </div>
  );
}