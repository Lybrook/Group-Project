function FruitItem({ name, color, cost }) {
    return (
      <div className="fruit-card">
        <h1>Name: {name}</h1>
        <h2>color: {color}</h2>
        <p>Cost: {cost}</p>
      </div>
    );
  }
  
  export default FruitItem;
  