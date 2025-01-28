export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing List ✈ </em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "You get Every Thing Ready To Go ✈"
          : `💼 You have ${numItems} items in your list and you already Packed ${numPacked} (${precentage})`}
      </em>
    </footer>
  );
}
