export default function Item({ id, name, quantity, category, onSelect }) {
  return (
    <ul>
      <section
        onClick={() => onSelect(name)}
        className="bg-gray-800 p-4 m-4 rounded-3xl w-full cursor-pointer hover:bg-gray-700"
      >
        <li key={id}></li>
        <li className="font-bold text-lg text-blue-500">{name}</li>
        <li className="ml-2">Quantity: {quantity}</li>
        <li className="ml-2">Category: {category}</li>
      </section>
    </ul>
  );
}
