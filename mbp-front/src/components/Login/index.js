import React, { Component, Fragment } from 'react'

const initialState = {
  user_name: '',
  password: ''
}

export default class Login extends Component {

  state = { ...initialState }

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div></div>
    )
  }
}
