import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { ChartsProp } from "../chartTypes";

const BarCharts = ({ data, yAxisTicks }: ChartsProp) => {
  const [isWindow, setIsWindow] = useState(window.innerWidth);

  const handleResize = () => {
    setIsWindow(window.innerWidth);
  };

  useEffect(() => {
    // Add resize event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isWindow]);

  return (
    <ResponsiveContainer
      width={isWindow <= 660 ? 800 : "100%"}
      height={isWindow >= 1130 || isWindow <= 990 ? 400 : 500}
    >
      <BarChart data={data}>
        <CartesianGrid vertical={false} strokeDasharray="2 2" />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis ticks={yAxisTicks} tickLine={false} axisLine={false} />

        <Tooltip cursor={{ fill: "transparent" }} />
        {/* <defs /> */}

        <Bar
          dataKey="count"
          barSize={60}
          radius={[30, 30, 0, 0]}
          fill="#005ae2cc"
          className="cursor-pointer"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={"#005ae2cc"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
