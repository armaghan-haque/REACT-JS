import axios from 'axios'
import { useState } from 'react'

const App = () => {
  
  const [data, setdata] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')

    console.log(response.data)

    setdata(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button> 
      <div>
        {data.map(function(elem,idx){
          return <h3>hello , {elem.author} , {idx}</h3>
        })}
      </div>    
    </div>
  )
}

export default App