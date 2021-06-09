import React from 'react'

import Pet from './Pet'

//age: 3
//gender: "male"
//id: "2c902312-dfa3-446f-8b4b-5e115170d807"
//isAdopted: false
//name: "Teddy"
//type: "cat"
//weight: 1


class PetBrowser extends React.Component {
   allPets = () => {
  return  this.props.pets.map(pet => {
      return <Pet pets={pet} key={pet.id}/>
    })
     
  } 
  render() {
   
    return <div className="ui cards">{this.allPets()}</div>
  }
}

export default PetBrowser
