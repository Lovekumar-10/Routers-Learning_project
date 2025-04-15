import React, { useEffect , useState} from 'react'

const FetchData = () => {
  const [ApiData, setApiData] = useState([])
  useEffect(() => {

    const Data = async ()=>{
      const API = await fetch("https://jsonplaceholder.typicode.com/photos")
      const data = await API.json()
      setApiData(data);
      console.log("My data is here",data);
      

    }
    Data();
  
  }, []);
  
  return (
    <div>{ApiData.map((data)=><div key={data.id}>
      <h3>{data.title}</h3>
      <img src={data.thumbnailUrl} alt="" style={{ width: "200px", height: "300px"}} />
    </div>)}</div>
  )
}

export default FetchData