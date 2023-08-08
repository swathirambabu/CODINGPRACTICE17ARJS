// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-image"
        />
        <div>
          <h1 className="details-text">Your Balance</h1>
          <p className="details-amount" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-image"
        />
        <div>
          <h1 className="details-text">Your Income</h1>
          <p className="details-amount" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-image"
        />
        <div>
          <h1 className="details-text">Your Expenses</h1>
          <p className="details-amount" data-testid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
