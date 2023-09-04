// Write your code here
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div>
        <h1>Show/Hide</h1>
        <div>
          <button type="button" onClick={this.showFirstName}>
            Show/Hide Firstname
          </button>
          {firstName && <p>Joe</p>}
        </div>
        <div>
          <button type="button" onClick={this.showLastName}>
            Show/Hide Lastname
          </button>
          {lastName && <p>Jonas</p>}
        </div>
      </div>
    )
  }
}

export default ShowHide
