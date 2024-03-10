import { useEffect } from "react";
import { BarCharts, PieChartComp } from ".";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  allAnalytics,
  allCusAnalytics,
} from "../../../management/actions/analytics.action";
import { useLocation } from "react-router-dom";

interface Analytics {
  name: string;
  count: number;
}

const Analytics = () => {
  const { isLoading, analyze } = useSelector(
    (store: RootState) => store.analyticsStore
  );

  const dispatch = useDispatch<AppDispatch>();
  const pathname: string = useLocation().pathname;

  useEffect(() => {
    if (pathname === "/analytics") {
      const getUrls = async () => {
        await dispatch(allAnalytics());
        dispatch(allCusAnalytics());
      };
      getUrls();
    }
  }, []);

  const data: Analytics[] = [
    { name: "Total Users", count: Number(analyze?.totalUsers) * 1000 },
    { name: "Page Views", count: Number(analyze?.screenPageViews) * 1000 },
    { name: "Engagement", count: Number(analyze?.userEngagement) * 1000 },
    { name: "Short URL", count: Number(analyze?.shortUrlVisited) * 1000 },
    { name: "Custom URL", count: Number(analyze?.CustomUrlVisited) * 1000 },
  ];

  const yAxisTicks = [0, 5000, 10000, 15000, 20000, 25000];

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
