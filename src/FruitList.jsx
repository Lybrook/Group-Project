import FruitItem from "./FruitItem";

function FruitList({ fruits = [] }) {
  return (
    <div>
      <div className="fruit-list"></div>
      {fruits.map(fruit => (
        <FruitItem
          key={fruit.id}
          name={fruit.name}
          color={fruit.color}
          cost={fruit.cost}
        />
      ))}
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter fruit name"
        />
        <input
          type="text"
          name="color"
          placeholder="Enter fruit color"
        />
        <input
          type="number"
          name="cost"
          placeholder="Enter fruit cost"
        />
      </form>
    </div>
  );
}

export default FruitList;
