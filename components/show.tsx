import React, { Children } from "react";

interface ShowProps {
  children: React.ReactNode;
}

interface ShowWhenProps {
  isTrue: boolean | undefined;
  children: React.ReactNode;
}

interface ShowElseProps {
  render?: React.ReactNode;
  children: React.ReactNode;
}

const Show: React.FC<ShowProps> & {
  When: React.FC<ShowWhenProps>;
  Else: React.FC<ShowElseProps>;
} = ({ children }) => {
  let when: React.ReactNode | null = null;
  let otherwise: React.ReactNode | null = null;

  Children.forEach(children, (child) => {
    const element = child as React.ReactElement;

    if (element.props.isTrue === undefined) {
      otherwise = element;
    } else if (!when && element.props.isTrue === true) {
      when = element;
    }
  });

  return when || otherwise;
};

Show.When = ({ isTrue, children }) => (isTrue ? children : null);

Show.Else = ({ render, children }) => (render ? render : children);

export default Show;
