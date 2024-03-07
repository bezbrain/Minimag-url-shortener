import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { ChartsProp } from "../chartTypes";

const PieChartComp = ({ data }: ChartsProp) => {
  return (
    <ResponsiveContainer width={700} height={700} className="mx-auto">
      <PieChart>
        <Pie dataKey="count" data={data} outerRadius={250} fill="green" label>
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={"#005ae2cc"} />
          ))}
        </Pie>

        <Tooltip cursor={{ fill: "transparent" }} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComp;
