import React, { Component, PropTypes } from "react";

const context = (component, params) => {
  return class Context extends Component {
    static displayName = "ContextWrapper";
    static childContextTypes = {
      styles: PropTypes.object,
      store: PropTypes.object,
      router: PropTypes.object,
      basePath: PropTypes.string
    };
    getChildContext() {
      const { router, styles, store, basePath } = params;
      return {
        styles,
        store,
        router,
        basePath
      };
    }
    render() {
      return React.cloneElement(component);
    }
  };
};

export default context;
