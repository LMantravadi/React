import { useEffect, useState } from "react";

export default function UseEffectExample() {
  //   1 - Use useEFfect to log to console
  //       useEffect(() => {
  //       console.log("Component Rendered!!!");
  //     }, []);
  //     return <div>Hello World!!</div>;
  // 2 - Use useEffect to fetch data from an API
  //   interface FetchedDataType {
  //     userId: number;
  //     id: number;
  //     title: string;
  //     completed: boolean;
  //   }
  //   //   const [data, setData] = useState<FetchedDataType | null>(null);
  //   //   const [error, setError] = useState("");
  //   const [data, setData] = useState([]);
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://jsonplaceholder.typicode.com/todos/1"
  //         );
  //         const data = await response.json();
  //         setData(data);
  //       } catch (e) {
  //         setError(e.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  //   if (error) {
  //     return <div>Error: {error}</div>;
  //   }
  //   return (
  //     <div>
  //       <h1>Data</h1>
  //       <ul>
  //         {Object.entries(data).map((item) => (
  //           <li>{item[1]}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // 3 - Handling Window Resize Events

  //   const [width, setWidth] = useState(window.innerWidth);
  //   const [height, setHeight] = useState(window.innerHeight);

  //   // Use useEffect to handle window resize events
  //   useEffect(() => {
  //     const handleResize = () => {
  //       setWidth(window.innerWidth);
  //       setHeight(window.innerHeight);
  //     };
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);
  //   return (
  //     <div>
  //       <h1>Window Size</h1>
  //       <p>Width: {width}</p>
  //       <p>Height: {height}</p>
  //     </div>
  //   );

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [data, setData] = useState([]);

  // Use useEffect to implement debounced search

  //   useEffect(() => {
  //     const debouncedTimeout = setTimeout(() => {
  //       setDebouncedSearchTerm(searchTerm);
  //     }, 500);

  //     return () => {
  //       clearTimeout(debouncedTimeout);
  //     };
  //   }, [searchTerm]);

  useEffect(() => {
    const handleSearch = () => {
      fetch(`https://jsonplaceholder.typicode.com/todos`).then((response) =>
        response.json().then((matchingData) => {
          console.log(matchingData);
          setData(matchingData);
        })
      );
    };

    handleSearch();

    // const searchInterval = setInterval(() => {
    //   handleSearch();
    // }, 2000);

    // return () => {
    //   clearInterval(searchInterval);
    // };
  }, []);
  return (
    <div>
      <h1>Search</h1>
      <input
        style={{ width: 200, height: 30, fontSize: 20 }}
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <ul>
        {Object.entries(data).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
