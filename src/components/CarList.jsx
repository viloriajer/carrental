import React from 'react'

export const CarList = (props) => {
    console.log(props.list);
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <h1>Car List</h1>
            <div  style={{display:'flex', flexDirection:'row'}}>

            {props.list.map(v=>(
                <div style={{width:500, height:400}}>
                    <img src={v.img} alt="" style={{width:450, height:375,objectFit:'cover'}}/>
                    <h3>{v.make + " "  + v.car + " " + v.year}</h3>
                    {/* <p>{v}</p> */}
                </div>
            ))}
            </div>
        </div>
    )
}
