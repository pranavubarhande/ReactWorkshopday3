import React from 'react'

function FunctionalProp(props) {
  return (
    <div>
        <button onClick={() => props.showname("Pranav")}>Show my name</button>
    </div>
  )
}

export default FunctionalProp