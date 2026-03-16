export default function DataRow({TagName, data}) {
    return (
        <TagName>
            <tr>
                <th>{data.year}</th>
                <th>{data.investmentValue}</th>
                <th>{data.yearlyInterest}</th>
                <th>{data.totalInterest}</th>
                <th>{data.capital}</th>
            </tr>
        </TagName>
    )
}