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
  Label,
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
      className="pt-8"
    >
      <BarChart data={data}>
        <CartesianGrid vertical={false} strokeDasharray="2 2" />
        <XAxis dataKey="name" tickLine={false} axisLine={false}>
          {/* X Axis Title */}
          {/* <Label value="X Axis Title" position="insideBottom" offset={-10} /> */}
        </XAxis>
        <YAxis ticks={yAxisTicks} tickLine={false} axisLine={false}>
          {/* Y Axis Title */}
          <Label
            value="VALUE OF EACH METRIC"
            angle={-90}
            position="insideLeft"
            offset={-20}
          />
        </YAxis>

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
