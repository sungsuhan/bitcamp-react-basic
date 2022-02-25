import React, {useState} from 'react' 
import { memberBmi } from '../api/index';
import Layout from '../containers/Layout';
export default function Bmi(){

    const [inputs, setInputs] = useState({})
    const {name, weight, height} = inputs; // Object  Destructuring

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, height, weight}
        console.log(` 사용자이름: ${JSON.stringify(bmiRequest)}`)
        memberBmi(bmiRequest)
        .then(res => {
            alert(res.data)
        })
        .catch(err => console.log('에러발생 : ${err)'))    
    }
    
    return (<Layout>
    <form>
    <h1>BMI 측정기</h1>
   
    
    <div>
    <label><b>Username</b></label>
    <input type="text" name="name" onChange={handleChange} /><br />

    <label htmlFor=""><b>height</b></label>
    <input type="text" name="height" onChange={handleChange} /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="text" name="weight" onChange={handleChange} /><br />

    <button onClick={handleClick}>BMI 측정</button>
    </div> 
    
    </form>
    </Layout>)
}
