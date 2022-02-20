import React,{Component} from "react";
import Cars from "./Cars";

class Header extends Component{

    // noCopy = () => {
    //     alert("Merci de ne pas copier ce paragraphe")
    // }

    // addStyled = (e) => {
    //     // console.log(e.target);
    //     if(e.target.classList.contains("styled")){ // pour vérifier si on a une classame du nom de styled
    //         e.target.classList.remove("styled");//pour supprimer une classeName à cet élément
    //     }
    //     else{
    //         e.target.classList.add("styled");//pour ajouter une classeName à cet élément
    //     }
    // }
    state = {
        voitures : [
            {marque : 'Mercedes',     couleur : 'White', year: '2000'},
            {marque : 'BMW',          couleur : 'Black', year: '2010'},
            {marque : 'Lambourguini', couleur : 'Red',   year: '2018'}
        ]
    }
    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        this.setState({
            updatedState
        })
    }
    render(){
        // console.log(this.props);
        const year = new Date().getFullYear();
        return (
            <div>
                {/* <h1 onMouseOver={this.addStyled}>{this.props.titre}</h1> */}
                <h1>{this.props.titre}</h1>
                <button onClick={this.addTenYears}>+10 ans</button>
                {/* <p onCopy = {this.noCopy}>la vie ainsi avec ces caprices celui qui la suit sa suite sera trise</p> */}
                {/* <Cars year={year - this.state.voitures[0].year + 'ans'} couleur={this.state.voitures[0].couleur} >{this.state.voitures[0].marque}</Cars> */}
                {/* <Cars year={year - this.state.voitures[1].year + 'ans'} couleur={this.state.voitures[1].couleur} >{this.state.voitures[1].marque}</Cars> */}
                {/* <Cars year={year - this.state.voitures[2].year + 'ans'} couleur={this.state.voitures[2].couleur} >{this.state.voitures[2].marque}</Cars> */}
                {
                    this.state.voitures.map( (voiture,index) => {
                        return <Cars key={index} year={year - voiture.year + 'ans'} couleur={voiture.couleur}>{voiture.marque}</Cars>
                    })
                }
            </div>
        )
    }
}

export default Header