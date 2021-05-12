import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import { fb } from '../service/firebase';

export const CarList = (props) => {

    const vehicles = fb.firestore.collection("vehicles")

    
    console.log(vehicles);

    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center', backgroundColor:"#DDDDDD"}}>
            <h1>Car List</h1>
            <div  style={{display:'flex', flexDirection:'column', alignItems:'center', width:"80%"}}>

            {props.list.map(v=>(
                <div style={{width:"90%",
                padding:'1rem', display:'flex', flexDirection:"column", alignItems:'center', marginBottom:"1rem",
                 marginTop:"1rem", justifyContent:"space-around", borderRadius:"1rem",backgroundColor:"#FDFDFD",boxShadow:"1px 1px 15px", position:'relative'}}>
                    <AiFillHeart style={{position:'absolute',left:"80%", top:"8%"}} fontSize="2.5rem" color="white" onClick={()=>{}}/>

                    <img src={v.img} alt="" style={{width:"100%",objectFit:'cover', borderRadius:5}}/>
                    <div style={{display:'flex', width:"90%", justifyContent:"space-between"}}>
                    

                    <h3 style={{alignSelf:'flex-start', marginTop: 10, textDecoration:'none'}}>{v.make + " "  + v.car + " " + v.year}</h3>

                    <p style={{fontWeight:"bold", marginTop:45}}>${v.dailyRate}/Day</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
