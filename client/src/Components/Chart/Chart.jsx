import "./Chart.scss";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from "recharts";

const data = [
  { name: "Newgen", Total: 20 },
  { name: "Celonios", Total: 10 },
  { name: "Chemours", Total: 25 },
  { name: "Hipi", Total: 5 }
];

const Chart = ({ aspect }) => {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart className="xAxis"
          width={100}
          height={50}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <Bar dataKey="Total" fill="#6bafc2" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;