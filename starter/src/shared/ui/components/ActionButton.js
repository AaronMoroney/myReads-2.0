import React from 'react'
import { Link } from 'react-router-dom'

const ActionButton = () =>  {
  return (
    <>
        <div className="open-search">
            <Link
                to="/search"
            >
            Add a book
            </Link>
        </div> 
    </>
  )
}

export default ActionButton