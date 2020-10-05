import React, { FC } from "react"
import FooterIcons from "./elements/FooterIcons"

const Footer: FC = () => {
    return (
        <div>
            <hr/>
            <div className="sm:px-20 px-4 pt-10 pb-10 bg-gray-300 flex sm:flex-row flex-col justify-between items-center">
                <div className="text-sm sm:pb-0 pb-4 text-gray-800 font-semibold">Made With ♥ By <b>Moussaid Ayoub</b></div>
                <FooterIcons />
            </div>
        </div>
        
    )
}

export default Footer