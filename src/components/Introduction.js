import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Introduction(){

    const[parentFullName, setParentFullName]=useState(null)

    const [selectedDate, setSelectedDate]=useState(null)

    return (
        <div>
            Gotham Gymnastics

            Class Evaluation Form

            <form action="" >
                <label>
                    Parent/Guardian Full Name:
                    <input type="text" Parent full Name ={parentFullName} />
                    Child Full Name:
                    <input type="text" />

                    Age Of Athlete:
            <DatePicker placeholderText="mm/dd/yyyy" selected={selectedDate} onChange={date => setSelectedDate(date)}  
            isClearable 
            showYearDropdown 
            scrollableMonthYearDropdown
            />
                </label>
                <input type="submit" value = "Submit"/>
            </form>

                 </div>
    )
}

export default Introduction;