function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>I m ur son</p>
      <p>
        이름은 {name}이며 {age}살 입니다.
      </p>
    </div>
  );
}

export default ChildComponent;
