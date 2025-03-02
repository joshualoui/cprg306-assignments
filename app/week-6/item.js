export default function Item({ id, name, quantity, category }) {
  return (
    <ul>
      <section className="bg-gray-800 p-4 m-4 rounded-3xl w-1/4">
        <li key={id}></li>
        <li className="font-bold text-lg text-blue-500">{name}</li>
        <li className="ml-2">Quantity: {quantity}</li>
        <li className="ml-2">Category: {category}</li>
      </section>
    </ul>
  );
}
