import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{yearData.totalInterest}</td>
                        <td>{yearData.investedCapital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}