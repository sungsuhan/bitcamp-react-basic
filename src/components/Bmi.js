import React from "react";
import Layout from "../containers/Layout";
export default function Bmi(){
    return <Layout>
    <h1>
    BMI 측정기
    </h1>
    <form>
    <div></div>
    <div>
    <label><b>이름</b></label><br/>
    <input></input><br/>
    <label><b>키(cm)</b></label><br/>
    <input></input><br/>
    <label><b>몸무게(kg)</b></label><br/>
    <input></input><br/>
    <button>BMI 측정</button>
    </div>
    </form>
    </Layout>
}