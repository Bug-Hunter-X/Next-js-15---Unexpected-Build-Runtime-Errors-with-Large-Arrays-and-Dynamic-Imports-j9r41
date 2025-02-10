```javascript
// pages/about.js

export default function About() {
  // Solution: Avoid creating the large array in componentDidMount.
  // Fetch or process data in a more optimized way, perhaps server-side
  // or using a more appropriate data structure.
  const [largeArray, setLargeArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(Array(100000).fill(0));
        }, 1000);
      });
      setLargeArray(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      {largeArray.length > 0 && <p>Array loaded</p>}
    </div>
  );
}
```