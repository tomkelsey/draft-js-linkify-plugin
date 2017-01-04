import React, { Component } from 'react';
import { Entity } from 'draft-js';
import unionClassNames from 'union-class-names';

// The component we render when we encounter a hyperlink in the text
export default class Link extends Component {
  render() {
    const {
      decoratedText = '', // eslint-disable-line no-unused-vars
      theme = {},
      target = '_self',
      className,
      component,
      dir, // eslint-disable-line no-unused-vars
      entityKey, // eslint-disable-line no-unused-vars
      getEditorState, // eslint-disable-line no-unused-vars
      offsetKey, // eslint-disable-line no-unused-vars
      setEditorState, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props;

    const combinedClassName = unionClassNames(theme.link, className);
    const { url } = Entity.get(entityKey).getData();

    const props = {
      ...otherProps,
      href: url,
      target,
      className: combinedClassName,
    };

    return component
      ? React.createElement(component, props)
      : <a {...props} />; // eslint-disable-line jsx-a11y/anchor-has-content
  }
}
