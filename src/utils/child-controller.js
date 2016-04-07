import React, { Component, PropTypes } from "react";

import context from "../utils/child-context";
import theme from "../themes/default";
import { updateRoute } from "../actions";

export default class Controller extends Component {
  static propTypes = {
    theme: PropTypes.object,
    children: PropTypes.node,
    store: PropTypes.object
  };

  static contextTypes = {
    router: PropTypes.object,
    basePath: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      print: false
    };
  }
  _updateRoute(location) {
    this.setState({
      print: location.search.indexOf("print") !== -1
    }, () => {
      this.props.store.dispatch(updateRoute(location));
    });
  }
  componentDidMount() {
    this.unlisten = this.context.router.listen(this._updateRoute.bind(this));
  }
  componentWillUnmount() {
    this.unlisten();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }
  render() {
    const styles = this.props.theme ? this.props.theme : theme();
    const Context = context(React.Children.only(this.props.children), {
      styles: this.state.print ? styles.print : styles.screen,
      print: styles.print,
      store: this.props.store,
      router: this.context.router,
      basePath: this.context.basePath
    });
    return <Context />;
  }
}

