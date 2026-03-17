import Header from "./components/Header.jsx";
import CalculatorForm from "./components/CalculatorForm.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";

const INITIAL_STATE = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
}

export default function App() {
    const [formData, setFormData] = useState(INITIAL_STATE);

    function handleChange(event, field) {
        setFormData(prev => ({...prev, [field]: +event.target.value}));
    }

    return (
        <>
            <Header/>
            <CalculatorForm onChange={handleChange}/>
            <Result data={formData}/>
        </>
    )
}