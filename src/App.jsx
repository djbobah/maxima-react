import { getRGB, randNumber, getArray } from "./utils/functions";

const icons = ["car", "rocket", "train", "bicycle", "truck", "subway", "plane"];

const Card = () => {
  const color = getRGB();
  const icon = icons[randNumber(icons.length)];
  const st = {
    backgroundColor: color,
    // border: `1px solid ${color}`,
    boxShadow: `0 0 10px #0008, 0 0 5px 2px ${color}`,
  };

  return (
    <div className="weather-card" style={st}>
      <i className={`fa fa-${icon}`} />
      <hr />
      <h3>{randNumber(20, -20)}C</h3>
    </div>
  );
};

const App = () => {
  // let n = 15;
  // const arr = [];
  // while (n--) {
  //   arr.push(n);
  // }
  const arr = getArray(15);

  console.log(arr);
  return (
    <div className="weather-grid">
      {/* {arr.map((item, index) => (
        <span key={index}>{item}</span>
      ))} */}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      {arr.map((item, index) => (
        <Card key={index}>{item}</Card>
      ))}
    </div>
  );
};

export default App;
