import {useState} from "react";

const carList =['Vinfast','BMW', 'Lexus'];
const colorList = ['Black', 'White', 'Red']
function Selector (){
    const [selectedCar,setSelectedCar] = useState({car: carList[0], color: colorList[0]})
    const handleCarChange = (event)=> {
        setSelectedCar(prevState => {
            return {
                ...prevState, car: event.target.value
            }
        })
    }
    const handleColorChange =(event) => {
      setSelectedCar(prevState => {
          return {
              ...prevState, color: event.target.value
          }
      })
    }
    return (
        <div>
            <p>
                Select a car
            <select onChange={handleCarChange}>
                {carList.map((car,index)=> <option key={index} value={car}>{car}</option>)}
            </select>
            </p>
            <p>
                Select a color
                <select onChange={handleColorChange}>
                Select a color {colorList.map((color, index) => <option key={index} value={color}>{color}</option>)}
            </select>
            </p>

            <p>You selected a {selectedCar.color} - {selectedCar.car}</p>
        </div>
    )
}

export default Selector;