import React from 'react'
import PersonShow from './PersonShow'

function ListComp() {
    const persons = [
        {name: 'Pranav', rn: '64'},
        {name: 'Harsh', rn: '36'},
        {name: 'Bhavesh', rn: '7'}
    ]
    const personList = persons.map((person, index) => <PersonShow key = {index} personn={person}></PersonShow>)
  return (
    <div>
        {personList}
    </div>
  )
}

export default ListComp