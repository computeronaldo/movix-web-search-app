import { useEffect } from "react";
import { fetchDataFromTMDBApi } from "./utils/api"

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = async () => {
    const res = await fetchDataFromTMDBApi('/movie/popular')
    console.log(res)
  }

  return (
    <div className='App'>
      App
    </div>
  )
}

export default App
