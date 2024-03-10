import { BarCharts, PieChartComp } from ".";

const Analytics = () => {
  const data = [
    { name: "Jan", count: 13000 },
    { name: "Feb", count: 31000 },
    { name: "Mar", count: 10000 },
    { name: "Apr", count: 38000 },
    { name: "May", count: 19000 },
  ];

  const yAxisTicks = [0, 10000, 20000, 30000, 40000, 50000, 60000];

  return (
    <section className="max-w-[1400px] p-4 mx-auto pt-16 overflow-x-auto">
      <h1 className="text-center max-w-[500px] mx-auto mb-10 text-xl sm:text-3xl sm:leading-[3rem]">
        Join other thousand users in using the unlimited and customizable URL
        manipulator
      </h1>
      <BarCharts data={data} yAxisTicks={yAxisTicks} />
      <PieChartComp data={data} yAxisTicks={yAxisTicks} />
    </section>
  );
};

export default Analytics;
