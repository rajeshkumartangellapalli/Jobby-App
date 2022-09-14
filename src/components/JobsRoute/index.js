import {Component} from 'react'
import Header from '../Header'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

class JobsRoute extends Component {
  state = {employmentType: employmentTypesList[0].employmentTypeId}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(response.ok)
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <div>
            <h1>Profile</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default JobsRoute
