import moment from "moment";
import React from "react";

interface ISecondProps {
  color: string;
}

const Second: React.FC<ISecondProps> = ({ color }) => {
  return (
    <h2 className="first" style={{ color }}>
      Второй компонент
    </h2>
  );
};
export default Second;
