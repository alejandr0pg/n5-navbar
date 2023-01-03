import React from "react";

interface IProps {
  children: any;
  to: string;
}

const Link: React.FunctionComponent<IProps> = ({ children, to }: IProps) => {
  return (
    <li
      onClick={() => {
        window.location.href = to;
      }}
    >
      {children}
    </li>
  );
};

export default Link;
