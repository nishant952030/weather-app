import React from 'react'
import HourSection from './HourSection'
import './hour.css'

function HourlyMainSection({information}) {
    const now = new Date();
    const hours = now.getHours();

    const amOrpm = hours < 12 ? 'AM' : 'PM'
    return (
        <div className='hourly_main_section'>
            <HourSection weatherData={information} time={(hours+1)%12} amOrpm={amOrpm} hour={(hours+1)%24} />
            <HourSection weatherData={information} time={(hours+2)%12} amOrpm={amOrpm} hour={(hours+2)%24} />
            <HourSection weatherData={information} time={(hours+3)%12} amOrpm={amOrpm} hour={(hours+3)%24} />
            <HourSection weatherData={information} time={(hours+4)%12} amOrpm={amOrpm} hour={(hours+4)%24} />
            <HourSection weatherData={information} time={(hours+5)%12} amOrpm={amOrpm} hour={(hours+5)%24} />
            <HourSection weatherData={information} time={(hours+6)%12} amOrpm={amOrpm} hour={(hours+6)%24} />
        </div>
    )
}

export default HourlyMainSection  
