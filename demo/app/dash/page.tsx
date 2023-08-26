async function getData() {
  try {
  } catch (er) {
    console.log(er);
  }
}
interface intemsComming {
  userId: number;
  title: string;
  id: number;
  completed: boolean;
}
const DashBoard = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data);
  return (
    <div>
      {data?.map((item: intemsComming, index: number) => {
        return (
          <div key={index} style={{ display: 'flex' }}>
            <h1>{item.userId}</h1>
            <h1>{item.completed ? 'COmpleted' : 'Not-Completed'}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default DashBoard;
