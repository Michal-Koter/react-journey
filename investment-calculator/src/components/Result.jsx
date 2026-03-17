import DataRow from "./DataRow.jsx";
import {calculateInvestmentResults, formatter} from "../util/investment.js";

const TABLE_HEADER = {
    year: "Year",
    valueEndOfYear: "Investment Value",
    interest: "Interest (Year)",
    total: "Total Interest",
    investment: "Investment Capital"
}

export default function Result({data}) {
    const investmentForecasts = (data.duration > 0) ? calculateInvestmentResults(data) : [];

    let result = []
        , totalInterests = 0
        , totalInvestments = data.initialInvestment;

    for (let i = 0; i < investmentForecasts.length; i++) {
        const current = investmentForecasts[i];
        totalInterests += current.interest;
        totalInvestments += current.annualInvestment;

        result.push({
            year: current.year,
            valueEndOfYear: formatter.format(current.valueEndOfYear),
            interest: formatter.format(current.interest),
            total: formatter.format(totalInterests),
            investment: formatter.format(totalInvestments)
        })
    }

    return (
        <table id="result">
            <thead>
                <DataRow data={TABLE_HEADER}></DataRow>
            </thead>
            <tbody>
                {result && result.map((row) => (
                    <DataRow data={row}></DataRow>
                ))}
            </tbody>
        </table>
    )
}