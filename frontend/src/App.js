import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
import axios from 'axios';
function App() {
  const getData = async () => {
    try {
      const result = await axios.get('http://localhost:8080/get-info');
      console.log(result.data);
    } catch (er) {
      console.log(er.message, er.response);
    }
  };
  const insertData = async (data) => {
    try {
      const result = await axios.post('http://localhost:8080/post-info', data);
      console.log(result.data);
    } catch (er) {
      console.log(er.message);
    }
  };
  return (
    <div className="App">
      <Navbar />
      <Todo getData={getData} insertData={insertData} />
    </div>
  );
}

export default App;
