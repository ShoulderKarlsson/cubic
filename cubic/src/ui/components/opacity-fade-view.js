import React from 'react'
import {Animated} from 'react-native'

export class OpacityFadeView extends React.Component {
  state = {
    fade: new Animated.Value(0),
  }
  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.state.fade, {
        toValue: 1,
        duration: this.props.duration || 1000,
      }).start()
    }, this.props.delay || 0)
  }
  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.fade,
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

