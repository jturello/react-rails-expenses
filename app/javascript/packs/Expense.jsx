import React from 'react'
import ReactDOM from 'react-dom'

class Expense extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <div className='expense-row'>
      <h2 className='title'>Hello {this.props.name}!</h2>
    </div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Expense name='Expenses' />,
    document.body.appendChild(document.createElement('div')))
})
