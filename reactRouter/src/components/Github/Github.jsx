import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Anand-Chaudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        });
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl tracking-tighter'>
      Github: {data.followers}
      <img src={data.avatar_url} alt="Profile Picture" width={300} />
    </div>
  )
}

export default Github