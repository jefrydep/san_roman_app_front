import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

const inter = Inter({ subsets: ["latin"] });

const data = [
  { Nombre: "Jefry", edad: "25", peso: "72" },
  { Nombre: "Jefry", edad: "21", peso: "72" },
  { Nombre: "Jefry", edad: "25", peso: "72" },
  { Nombre: "Jefry", edad: "25", peso: "72" },
  { Nombre: "Jefry", edad: "25", peso: "72" },
  { Nombre: "Jefry", edad: "25", peso: "72" },
];
const data1 = [
  { name: "Page A", uv: 400, pv: 2200, amt: 2000 },
  { name: "Page A", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 100, pv: 1500, amt: 1900 },
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 350, pv: 2400, amt: 2200 },
  { name: "Page A", uv: 390, pv: 2300, amt: 2400 },
];
export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mt-7 mb-3 font-bold">Graficos San roman</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-white  shadow-sm">
        <ResponsiveContainer width="" height="" aspect={2}>
          <BarChart
            data={data}
            width={500}
            height={300}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray={"4 1 2"} />
            <XAxis dataKey={"Nombre"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={"peso"} fill="#6b48ff" />
            <Bar dataKey={"edad"} fill="#1ee3cf" />
          </BarChart>
        </ResponsiveContainer>
        <div>
          <LineChart width={300} className="w-64"  height={150} data={data1}   >
            <Line type="monotone" dataKey="uv" />
            <CartesianGrid stroke="#ccc"  />
            <XAxis dataKey="name"   />
            <YAxis  />
          </LineChart>
        </div>
      </div>
    </>
  );
}
