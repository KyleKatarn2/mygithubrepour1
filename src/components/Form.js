import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    /*
            TODO - set initial state for link name and URL 
        */
    this.state = {
      linkName: "",
      url: ""
    }
  }

  handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    if (event.target.id === "link")
      this.setState({
        linkName: event.target.value,
      })
    else
      this.setState({
        url: event.target.value,
      })
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  render() {
    return (
      <form>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
      </form>
    )
  }
}

export default Form
