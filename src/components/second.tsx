import moment from "moment";
import React from "react";

interface ISecondProps {
  color: string;
}

moment.locale("ru");
console.log(moment().format("DD MMM YYYY"));

const Second: React.FC<ISecondProps> = ({ color }) => {
  return (
    <h2 className="first" style={{ color }}>
      Второй компонент
    </h2>
  );
};
export default Second;
