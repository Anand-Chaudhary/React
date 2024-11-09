import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <>
        <div className='text-2xl tracking-tighter font-medium p-4'>User: {userid}</div>
    </>
  )
}

export default User