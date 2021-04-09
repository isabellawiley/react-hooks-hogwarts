import React, { useState } from "react"

function HogForm( { onDataSent }) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [weight, setWeight] = useState(0)
    const [greased, setGreased] = useState('true')
    const [highestMedal, setHighestMedal] = useState('')

    //console.log([name, image, specialty, weight, greased, highestMedal])

    const formData = {
        name: name, 
        image: image, 
        specialty: specialty, 
        greased: greased, 
        weight: weight,
        highestMedal: highestMedal
    }

    function handleSubmit(event) {
        event.preventDefault()
        onDataSent(formData)
        return 
    }
    function handleNameChange(event){
        setName(event.target.value)
        return 
    }

    function handleImageChange(event) {
        setImage(event.target.value)
        return 
    }

    function handleSpecialtyChange(event){
        setSpecialty(event.target.value)
        return 
    }

    function handleWeightChange(event){
        setWeight(event.target.value)
        return 
    }

    function handleGreasedChange(event) {
        
        console.log(event.target.value)
        setGreased(event.target.value)
        return 
    }

    function handleHighestMedalChange(event) {
        setHighestMedal(event.target.value)
        return
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input placeholder="Name" onChange={ handleNameChange } type="text" name="name" />
            <input placeholder="Image" onChange={ handleImageChange } type="text" name="image" />
            <input placeholder="Specialty" onChange={ handleSpecialtyChange } type="text" name="specialty" />
            <label htmlFor="weight">Weight</label>
            <input onChange={ handleWeightChange } type="number" name="weight" />
            <label htmlFor="checkbox">Greased</label>
            <select onChange={ handleGreasedChange } name="greased">
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            <input placeholder="Highest Medal" onChange={ handleHighestMedalChange } type="text" name="highestMedal" />
            <input type="submit"/> 
        </form>
    )
}

export default HogForm