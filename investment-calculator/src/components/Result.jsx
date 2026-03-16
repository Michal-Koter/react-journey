import DataRow from "./DataRow.jsx";

const TABLE_HEADER = {
    year: "Year",
    valueEndOfYear: "Investment Value",
    interest: "Investment (Year)",
    total: "Total Interest",
    annualInvestment: "Investment Capital"
}

export default function Result({data}) {
    return (
        <table id="result">
            <thead>
                <DataRow data={TABLE_HEADER}></DataRow>
            </thead>
            <tbody>
                {data && data.map((row) => (
                    <DataRow data={row}></DataRow>
                ))}
            </tbody>
        </table>
    )
}