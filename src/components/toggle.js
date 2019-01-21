import React, { Component } from 'react'

export default class toggle extends Component {
  state = {
    open: false,
  }
  toggle = () => this.setState(({ open }) => ({ open: !open }))
  render() {
    const {
      state: { open },
      toggle,
      props: { children },
    } = this
    return children({ open, toggle })
  }
}
