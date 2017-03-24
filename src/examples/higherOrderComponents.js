import React from 'react';

export const getDisplayName = (Component) =>
  Component.displayName || Component.name || 'Component';

/*
  PROXY PROPS

  You can read, add, edit and remove the props that are being passed to the
  WrappedComponent. Be careful with deleting or editing important props, you
  should probably namespace your Higher Order props not to break the WrappedComponent.
*/

export const propsProxyHOC = (WrappedComponent) =>
  (props) => {
    const moreProps = {
      user: 'currentuser'
    };

    return (
      <WrappedComponent {...props} {...moreProps} />
    );
  };

/*
  ACCESS INSTANCE VIA REFS

  You can access this (the instance of the WrappedComponent) with a ref,
  but you will need a full initial normal render process of the WrappedComponent
  for the ref to be calculated, that means that you need to return the W
  rappedComponent element from the HOC render method, let React do it’s
  reconciliation process and just then you will have a ref to the
  WrappedComponent instance.
*/

export const refsHOC = (WrappedComponent) => {
  return React.createClass({
    proc(wrappedComponentInstance) {
      wrappedComponentInstance.method();
    },
    render() {
      const props = { ...this.props, ref: this.proc.bind(this) };
      return <WrappedComponent {...props} />;
    }
  });
};

/*
  STATE ABSTRACTION

  You can abstract state by providing props and callbacks to the WrappedComponent,
  very similar to how smart components will deal with dumb components.
*/

export const stateHOC = (WrappedComponent) => {
  return React.createClass({
    getInitialState() {
      return {
        value: ''
      };
    },
    onValueChange(event) {
      this.setState({
        value: event.target.value
      });
    },
    render() {
      const newProps = {
        value: this.state.value,
        onChange: this.onValueChange
      };
      return (
        <WrappedComponent {...this.props} {...newProps} />
      );
    }
  });
};

// usage:

const ControlledInput = stateHOC(
  (props) => <input name="name" {...props.name} />
);


/*
  STYLING WITH HOC

  more flexible than {props.children} wrapping
*/

export const styleHOC = (WrappedComponent) => (props) =>
  <div style={{ display: 'block' }}>
    <WrappedComponent {...props} />
  </div>;


/*
  INHERITANCE INVERSION

  It is called Inheritance Inversion because instead of the WrappedComponent
  extending some Enhancer class, it is passively extended by the Enhancer.
  In this way the relationship between them seems inverse. Inheritance Inversion
  allows the HOC to have access to the WrappedComponent instance via this,
  which means it has access to the state, props, component lifecycle hooks
  and the render method.

  !!! Inheritance Inversion High Order Components don’t have a guaranty
  of having the full children tree resolved. !!!
*/

export const iiHOC = (WrappedComponent) => {
  return class Enhancer extends WrappedComponent {
    render() {
      return super.render();
    }
  };
};


// CONDITIONAL RENDERING

export const requiresAuth = (WrappedComponent) => {
  return class Enhancer extends WrappedComponent {
    render() {
      if (!this.props.isLoggedIn) {
        return null;
      }
      return super.render();
    }
  };
};


// MODIFY REACT ELEMENT TREE

export const modifyTree = (WrappedComponent) => {
  return class Enhancer extends WrappedComponent {
    render() {
      const elementsTree = super.render();
      let newProps = {};

      if (elementsTree && elementsTree.type === 'input') {
        newProps = {
          value: 'may the force be with you'
        };
      }

      const props = { ...elementsTree.props, ...newProps };

      const newElementsTree = React.cloneElement(
        elementsTree,
        props,
        elementsTree.props.children
      );

      return newElementsTree;
    }
  };
};


// DEBUGGING

export const HOCDebugger = (WrappedComponent) => {
  return class II extends WrappedComponent {
    static displayName = `HOCDebugger(${getDisplayName(WrappedComponent)})`;
    render() {
      return (
        <div>
          <h2>HOC Debugger Component</h2>
          <p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>
          <p>State</p><pre>{JSON.stringify(this.state, null, 2)}</pre>
          {super.render()}
        </div>
      );
    }
  };
};
