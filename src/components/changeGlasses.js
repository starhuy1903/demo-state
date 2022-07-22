import React, {Component} from 'react';
import './changeGlasses.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import model from "../assets/img/model.jpg"
import Glasses from "./glasses";
import v1Img from '../assets/img/v1.png'
import v2Img from '../assets/img/v2.png'
import v3Img from '../assets/img/v3.png'
import v4Img from '../assets/img/v4.png'
import v5Img from '../assets/img/v5.png'
import v6Img from '../assets/img/v6.png'
import v7Img from '../assets/img/v7.png'
import v8Img from '../assets/img/v8.png'
import v9Img from '../assets/img/v9.png'

class ChangeGlasses extends Component {
    state = {
        display: {
            img: '',
            name: '',
            desc: ''
        },
        glasses: [{
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": v1Img,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
            {
                "id": 2,
                "price": 50,
                "name": "GUCCI G8759H",
                "url": v2Img,
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 3,
                "price": 30,
                "name": "DIOR D6700HQ",
                "url": v3Img,
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 4,
                "price": 70,
                "name": "DIOR D6005U",
                "url": v4Img,
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 5,
                "price": 40,
                "name": "PRADA P8750",
                "url": v5Img,
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 6,
                "price": 60,
                "name": "PRADA P9700",
                "url": v6Img,
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 7,
                "price": 80,
                "name": "FENDI F8750",
                "url": v7Img,
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 8,
                "price": 100,
                "name": "FENDI F8500",
                "url": v8Img,
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 9,
                "price": 60,
                "name": "FENDI F4300",
                "url": v9Img,
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            }]
    }


    
    render() {
        return (
            <div className={"wrapper"}>
                <div className="container">
                    <h1 className={"title fw-bold pt-3"}>Try glasses app online</h1>
                    <div className={"image-wrapper d-flex justify-content-around"}>
                        <div className={"left"}>
                            <img width={"250px"} src={model} alt="Model-glass"/>
                            <div className="img-overlay">
                                <img src={this.state.display.img} alt=""/>
                            </div>
                            <div className={"overlay-content p-1"}>
                                <h1 className={"product-name text-start fs-4"}>{this.state.display.name}</h1>
                                <p className={"text-light fw-semibold text-start"}>{this.state.display.desc}</p>
                            </div>
                        </div>
                        <div className={"right"}>
                            <img width={"250px"} src={model} alt="Model"/>
                        </div>

                    </div>
                    <div className="row row-cols-4 row-cols-lg-6 g-2 g-lg-3 mt-2 bg-light p-3">
                        {this.state.glasses.map((prod) => {
                            return (<Glasses key={prod.id} product={prod} onChangeGlasses={this.handleChangeGlasses} />)
                        })}
                    </div>
                </div>
            </div>
        );
    }

    handleChangeGlasses = (prod) => {
        let allProducts = [...this.state.glasses];
        let index = allProducts.indexOf(prod);
        this.setState({
            display: {
                name: allProducts[index].name,
                desc: allProducts[index].desc,
                img: allProducts[index].url,
            }
        })
    }
}

export default ChangeGlasses;