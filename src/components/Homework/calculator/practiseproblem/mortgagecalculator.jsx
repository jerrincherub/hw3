import { useState } from "react"

export default function Mortgage() {
    const [loan, setLoan] = useState('')
    const [interest, setInterest] = useState('')
    const [loanterm, setLoanTerm] = useState('')
    const [monthlypayment, setMonthlyPayment] = useState('')
    const [totalpayment, setTotalPayment] = useState('')
    const [interestpaid, setInterestPaid] = useState('')
    const onButtonClick = (e) => {
        e.preventDefault()
    }

    const calculate = () => {
        const p = loan
        const annualinterestrate = interest / 100
        const i = annualinterestrate / 12
        const n = loanterm * 12

       const  monthlypayment = (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
       const totalpayment = monthlypayment * n
       const interestpaid = totalpayment - p
        setMonthlyPayment(monthlypayment)
        setTotalPayment(totalpayment)
        setInterestPaid(interestpaid)
        setLoan('')
        setInterest('')
        setLoanTerm('')
    }


    return (
        <div style={{margin:"center"}}>
            <form onSubmit={onButtonClick}>
                <div style={{
                    padding:5
                }}>
                    Loan amount:
                <input style={{padding:5,
                    margin:5
                }}
                    type="number"
                    placeholder="Enter the loan amount"
                    onChange={(event) => setLoan(parseFloat(event.target.value))} />
                    </div>
                    <div style={{padding:5}}>
                        Interest rate:
                <input style={{padding:5,
                    margin:5}}
                    type="number"
                    placeholder="Enter the interest rate"
                    onChange={(event) => {
                        setInterest(parseFloat(event.target.value))

                    }} />
                    </div>
                    <div style-={{padding:5,marginLeft:5}}>
                        Years:
                <input style={{padding:5,
                    margin:5}}
                    type="number"
                    placeholder="Enter the years "
                    onChange={(event) => {
                        setLoanTerm(parseInt(event.target.value))
                    }}
                />
                </div>
                <button style={{backgroundColor:"red"}}
               onClick= {calculate}>
                    Calculator
                </button>
                <p> Monthly mortgage payment:  {monthlypayment}</p>
                <p> Total payment amount:  {totalpayment}</p>
                <p> Total interest paid:  {interestpaid}</p>








            </form>









        </div>





    )



}