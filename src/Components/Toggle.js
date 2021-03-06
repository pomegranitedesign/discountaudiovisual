import { Component } from 'react'

export default class Modal extends Component {
	state = { on: false }
	toggle = () => this.setState(({ on }) => ({ on: !on }))
	render() {
		return this.props.children({ on: this.state.on, toggle: this.toggle })
	}
}
