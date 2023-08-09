import axios from 'axios';

const todo = (props) => {
  console.log(props);
  return <div>todo</div>;
};

export const getServerSideProps = async () => {
  try {
    const [row] = await axios.get('http://localhost:3000/api/');
    // const res = await fetch('https://api.github.com/users');
    // const repo = await res.json();
    // console.log(repo);
    return { props: { data: row } };
  } catch (er) {
    console.log(er.message);
    return { props: { data: er } };
  }
};

export default todo;

// http://localhost:3000/todo
