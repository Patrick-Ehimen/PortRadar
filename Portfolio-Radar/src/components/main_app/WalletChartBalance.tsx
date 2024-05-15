import React from "react";
import { Doughnut } from "react-chartjs-2";

interface Data {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  };
}

const WalletChartBalance: React.FC = () => {
  const data: Data = {
    labels: ["Bitcoin", "Ethereum", "Ripple"],
    datasets: [
      {
        data: [1200, 700, 300],
        backgroundColor: ["#f87979", "#7C4DFF", "#00C49F"],
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default WalletChartBalance;
