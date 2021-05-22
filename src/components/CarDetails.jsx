import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-elastic-carousel";

export const CarDetails = () => {
	const { id } = useParams();
	const [data,setData] = useState();

	const getData= async()=>{
		await fetch(`${id}.json`
		,{
		  headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		   }
		}
		)
		  .then(function(response){
			console.log(response)
			return response.json();
		  })
		  .then(function(myJson) {
			setData(myJson)
		  });
	  }
	  useEffect(()=>{
		getData()
	  },[])

	const imgs = [
		{
			img: "https://www.motortrend.com/uploads/sites/5/2021/02/2021-Toyota-GR-Supra-3-0-Premium-26.jpg",
		},
		{
			img: "https://img.etimg.com/thumb/msid-69924312,width-650,imgsize-180003,,resizemode-4,quality-100/toyota-supra.jpg",
		},
		{
			img: "https://i.insider.com/5e46bb2b4b661b0353729e9e?width=750&format=jpeg&auto=webp",
		},
	];

	const specs = {
		transmission: "Automatic",
		seats: "2",
		doors: "2",
		hp: "382",
	};

	const specs2 = [
		{
			s: "Automatic",
		},
		{
			s: "2",
		},
		{ s: "2" },
		{ s: "382" },
	];

	return (
		<>
			<div style={{ padding: 15, display: "flex", flexDirection: "column" }}>
				<div>
					<Carousel>
						{data?.imgs.map((item) => (
							<img
								src={item}
								style={{ width: "100%", objectFit: "cover" }}
							/>
						))}
					</Carousel>
				</div>
				<div>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<h3>{data?.car}</h3>
						<p>$125/Day</p>
					</div>
					<div>
						<h4>Specifications</h4>
						<div
							style={{
								display: "flex",
								flexFlow: "wrap",
								justifyContent: "space-between",
							}}
						>
							{/* <div style={{width:"38%", height:60, border:'1px solid black', borderRadius:15, marginBottom:15, display:"flex", alignItems:"center", justifyContent:"center"}}>{specs.transmission}</div>
                            <div style={{width:"38%", height:60, border:'1px solid black', borderRadius:15, marginBottom:15, display:"flex", alignItems:"center", justifyContent:"center"}}>{specs.seats} Seats</div>
                            <div style={{width:"38%", height:60, border:'1px solid black', borderRadius:15, marginBottom:15, display:"flex", alignItems:"center", justifyContent:"center"}}>{specs.doors} Doors</div>
                            <div style={{width:"38%", height:60, border:'1px solid black', borderRadius:15, marginBottom:15, display:"flex", alignItems:"center", justifyContent:"center"}}>{specs.hp} Horsepower</div> */}

							{/* {Object.values(data?.specs).map(item=> <div style={{width:"48%", height:60, border:'1px solid black', borderRadius:15, marginBottom:15, display:"flex", alignItems:"center", justifyContent:"center"}}>{item}</div>)} */}
						</div>
					</div>
					<div>
						<h4>Details</h4>
						<p>
							{data?.description}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
