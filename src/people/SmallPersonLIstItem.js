const SmallPersonLIstItem = ({ person }) => {
  const { name, age } = person;
  return (
    <div>
      Name: {name}, Age: {age} years
    </div>
  );
};

export default SmallPersonLIstItem;
