import { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { AreaChart, BarChart } from ".";
import { useSelector } from "react-redux";

function ChartsContainer() {
  const [barChart, setBartChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJob);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBartChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
}

export default ChartsContainer;
