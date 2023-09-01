function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useLoading(false);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${count}`
      );
      let jsonData = await response.json();

      setLoading(false);
      setData([...data, ...jsonData]);
      return;
    } catch (er) {
      return console.log(er.message);
    }
  };

  const infiniteScroll = async () => {
    console.log('scroll height', document.documentElement.scrollHeight);
    console.log('innerHeight', window.innerHeight);
    console.log('scrollTop', document.documentElement.scrollTop);
    let scrollHeight = document.documentElement.scrollHeight;
    let innerHeight = window.innerHeight;
    let scrollTop = document.documentElement.scrollTop;

    try {
      if (
        Math.ceil(scrollTop + innerHeight) >= scrollHeight &&
        data.length <= 99
      ) {
        setCount((prev) => prev + 1);
      }
    } catch (er) {
      return console.log(er.message);
    }
  };
  useEffect(() => {
    getData();
  }, [count]);
  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, []);
  return (
    <div
      style={{
        width: '80%',
        margin: 'auto',
        display: 'grid',
        border: '1px solid black',

        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '10px',
      }}
    >
      {data.map((item) => {
        return (
          <div key={item.id} style={{ border: '1px solid blue' }}>
            <div>{item.id}</div>
            <h1>{item.body.substr(0, 200)}</h1>
            <button style={{ padding: '10px' }}>{item.title}</button>
          </div>
        );
      })}
      {loading ? <h1>...Please Wait</h1> : null}
    </div>
  );
}

export default App;
