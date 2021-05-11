import React,{useEffect} from 'react'
import { useParams
} from "react-router-dom";
export const CarDetails = () => {
    const {id} = useParams()

    return (
        <>
            <h1>Car Details</h1>
            <div>
                <h3>About the car</h3>
                <div>
                    <p></p>
                </div>
            </div>
        </>
    )
}
