import React, { Component, PropTypes } from "react";

import { Provider } from "react-redux";
import configureStore from "../store";

import Controller from "../utils/child-controller";

const store = configureStore();

export default class ChildSpectacle extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    basePath: PropTypes.string
  };

  static contextTypes = {
    router: PropTypes.object
  };

  static childContextTypes = {
    router: PropTypes.object,
    basePath: PropTypes.string
  };

  constructor () {
    super()
    this.getChildContext = this.getChildContext.bind(this)
  };

  getChildContext () {
    return {
      router: this.context.router,
      basePath: this.props.basePath
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Controller
          theme={this.props.theme}
          store={store}
          >
          {this.props.children}
        </Controller>
      </Provider>
    );
  }
}

