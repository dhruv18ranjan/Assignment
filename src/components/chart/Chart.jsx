import React from "react";
import "./chart.css"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "1 mar",
        spent: 94,
        referral: 28,
        amt: 44
    },
    {
        name: "",
        spent: 40,
        referral: 33,
        amt: 13
    },
    {
        name: "",
        spent: 85,
        referral: 45,
        amt: 150
    },
    {
        name: "",
        spent: 67,
        referral: 19,
        amt: 20
    },
    {
        name: "",
        spent: 78,
        referral: 28,
        amt: 21
    },
    {
        name: "",
        spent: 43,
        referral: 18,
        amt: 25
    },
    {
        name: "",
        spent: 34,
        referral: 43,
        amt: 20
    }, {
        name: "",
        spent: 30,
        referral: 43,
        amt: 22
    },
    {
        name: "",
        spent: 90,
        referral: 28,
        amt: 22
    },
    {
        name: "",
        spent: 20,
        referral: 39,
        amt: 20
    },
    {
        name: "",
        spent: 68,
        referral: 48,
        amt: 21
    },
    {
        name: "",
        spent: 23,
        referral: 38,
        amt: 25
    },
    {
        name: "14 mar",
        spent: 34,
        referral: 43,
        amt: 21
    }
];

export default function Chart() {
    return (

        <div className="chart">

            <div className="stats">
                <div>
                    <h4>Daily balance overview</h4>
                </div>
                <div>
                    <ul>
                        <li>Spent</li>
                        <li style={{ marginRight: "12px", color: "rgb(218, 212, 212" }}>|</li>
                        <li>Referal</li>
                        <li>

                            <select className="option" id="">
                                <option value="14">14 days</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="chartDiv">

                <BarChart
                    width={830}
                    height={200}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 0,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" fontSize="12px" />
                    <Tooltip />
                    <Bar dataKey="referral" stackId="a" fill="#4106b7" barSize={7} radius={10} />
                    <Bar dataKey="spent" stackId="a" fill="#2DCDDF" barSize={7} radius={10} />

                </BarChart>
                <div className="chartright">
                    
                        <p>150 USD</p>
                        <p>100 USD</p>
                        <p>50 USD</p>
                        <p>10 USD</p>
                        <p>0 USD</p>
                    
                </div>
            </div>
        </div>
    );
}
