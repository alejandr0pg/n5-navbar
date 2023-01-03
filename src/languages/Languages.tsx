import React from "react";

interface IProps {
  lng: string;
}

const Languages: React.FunctionComponent<IProps> = ({ lng }: IProps) => {
  return (
    <li
      onClick={() => {
        window.localStorage.setItem("language", lng);
        window.location.reload();
      }}
    >
      {lng}
    </li>
  );
};

export default Languages;
