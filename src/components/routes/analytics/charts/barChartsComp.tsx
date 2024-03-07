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

const BarCharts = () => {
  const [isWindow, setIsWindow] = useState(window.innerWidth);

  const data = [
    { name: "Jan", count: 13000 },
    { name: "Feb", count: 31000 },
    { name: "Mar", count: 10000 },
    { name: "Apr", count: 38000 },
    { name: "May", count: 19000 },
  ];

  const yAxisTicks = [0, 10000, 20000, 30000, 40000, 50000, 60000];

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
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={"#005ae2cc"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
