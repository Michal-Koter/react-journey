export default function DataRow({data}) {
    return (
        <tr>
            <th>{data.year}</th>
            <th>{data.valueEndOfYear}</th>
            <th>{data.interest}</th>
            <th>{data.total}</th>
            <th>{data.investment}</th>
        </tr>
    )
}