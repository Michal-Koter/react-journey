import DataRow from "./DataRow.jsx";

const TABLE_HEADER = {
    year: "Year",
    investmentValue: "Investment Value",
    yearlyInterest: "Investment (Year)",
    totalInterest: "Total Interest",
    capital: "Investment Capital"
}

export default function Result(data) {
    return (
        <table id="result">
            <DataRow TagName="thead" data={TABLE_HEADER}></DataRow>
            {!data && data.map((row) => (
                <DataRow TagName="tbody" data={row}></DataRow>
            ))
            }
        </table>
    )
}