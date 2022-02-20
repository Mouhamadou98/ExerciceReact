import React from "react";

const Cars = (props) => {
    // console.log(props)
    const colorInfo =  props.couleur ? props.couleur : "Néant" ;
    if(props.children){
        return(
            <div style={{backgroundColor:'pink', width:'400px', margin:'5px auto', padding:'10px'}}>
                <p>Marque : {props.children} </p>
                <p>Année : {props.year} </p>
                <p>Couleur : {colorInfo}</p>
            </div>
        )
    }
    else return null
        // return (
        //     <div style={{backgroundColor:'pink', width:'400px', margin:'5px auto', padding:'10px'}}>
        //         <p>Pas de data</p>
        //     </div>
        // )
    }

export default Cars