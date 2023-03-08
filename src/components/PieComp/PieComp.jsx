import React from "react";
import "./pieComp.css"
import { PieChart, Pie, Sector, Cell ,Label} from "recharts";

const data = [
  { name: "Group B", value: 400 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 700 }
];
const COLORS = ["#655DBB", "#BDCDD6", "turquoise"];




const PieComp = () => {
  return (
    <div className="pie">

      <div>
        <h4>Balance Statistics</h4>
      </div>
      
      <PieChart width={280} height={270}>
        <Pie 
          radius="50%"
          data={data}
          cx={120}
          cy={100}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={-5}
          dataKey="value"
          labelLine={false}

        >
          {data.map((entry, index) => (
            <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={10} />
          ))}
        </Pie>
       

      </PieChart>
      <div className="centerInfo">
        <span>$</span>
        <span> <b>1,872</b> </span> <br />
        <span style={{fontSize:"12px",color:"gray"}}>Money Spent</span>
      </div>
    </div>
  );
}
export default PieComp;
