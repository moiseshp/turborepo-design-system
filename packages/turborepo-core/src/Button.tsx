import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button style={{
    backgroundColor: 'black',
    color: 'white',
    border: '3px solid gray',
    padding: '12px 30px',
    borderRadius: 30
  }}>{props.children}</button>;
}

Button.displayName = "Button";
