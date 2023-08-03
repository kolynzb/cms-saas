"use client";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type ChartData = any;

type ChartOptions = any;

interface Props {
  chartData: ChartData[];
  chartOptions: ChartOptions;
}

const BarChart: React.FC<Props> = (props) => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [chartOptions, setChartOptions] = useState<ChartOptions>({});

  useEffect(() => {
    setChartData(props.chartData);
    setChartOptions(props.chartOptions);
  }, [props.chartData, props.chartOptions]);

  return (
    <Chart
      options={chartOptions}
      series={chartData}
      type="bar"
      width="100%"
      height="100%"
    />
  );
};

export default BarChart;
