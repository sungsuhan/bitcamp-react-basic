import React from "react";
import Layout from "../containers/Layout";
export default function Calc(){
    return <Layout>
    <h1>
    계산기
    </h1>
    <form>
    <div></div>
    <div>
    <label><b>숫자1</b></label>
    <input></input><br/>
    <label><b>연산자</b></label>
    <input></input><br/>
    <label><b>숫자2</b></label>
    <input></input><br/>
    <button>계산</button>
    </div>
    </form>
    </Layout>
}