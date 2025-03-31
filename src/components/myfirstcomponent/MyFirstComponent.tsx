import React from "react";

interface MyFirstComponentProps {
  message: string;
}

export const MyFirstComponent: React.FC<MyFirstComponentProps> = ({
  message,
}) => {
  return <h3>{message}</h3>;
};

export function myFirstComponentFunc() {
  return <h2>Hello World</h2>;
}
