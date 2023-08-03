import Chart from "react-apexcharts";

const PieChart = (props:any) => {
  const { series, options } = props;

  return (
    <Chart
      options={options}
      type="pie"
      width="100%"
      height="100%"
      series={series}
    />
  );
};

export default PieChart;
