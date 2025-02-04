export default function Item({ name, quantity, category }) {
  return (
    <ul>
      <section className="bg-gray-800 p-4 m-4 rounded-3xl w-1/4">
        <h2 className="font-bold text-lg text-blue-500">{name}</h2>
        <p className="ml-2">Quantity: {quantity}</p>
        <p className="ml-2">Category: {category}</p>
      </section>
    </ul>
  );
}
