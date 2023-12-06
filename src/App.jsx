import RadarChart from "./jetty-chart/src/radar/RadarChart";
import { StackedBar } from "jetty-chart";


const chartdata = [
  {
      "value": [
          38,
          28,
          44,
          98,
          21
      ],
      label: "x1"
  },
  {
      value: [
          15,
          64,
          61,
          37,
          67
      ],
      label: "x2"
  },
  {
      value: [
          28,
          98,
          83,
          46,
          45
      ],
      label: "x3"
  },
  {
      value: [
          89,
          69,
          18,
          55,
          78
      ],
      label: "x4"
  },
  {
      value: [
          63,
          25,
          34,
          12,
          20
      ],
      label: "x5"
  },
  {
      value: [
          70,
          50,
          54,
          82,
          61
      ],
      label: "x6"
  }
];
const data = [
  {
    name: "with color",
    captions: {
      // columns
      Power: "Power",
      Hit: "Hit",
      Run: "Run",
      Field: "Field",
      Arm: "Arm",
    },
    chart: [
      // data
      {
        data: { Power: 55, Hit: 65, Run: 40, Field: 30, Arm: 60 },
        meta: { color: "#8258FA"},
      },
      {
        data: { Power: 55, Hit: 70, Run: 45, Field: 35, Arm: 70 },
        meta: { color: "#81F7F3" },
      },
      {
        data: { Power: 80, Hit: 60, Run: 50, Field: 70, Arm: 60 },
        meta: { color: "#2E2EFE" },
      },
      {
        data: { Power: 45, Hit: 60, Run: 80, Field: 65, Arm: 50 },
        meta: { color: "#FF0000" },
      },
      {
        data: { Power: 65, Hit: 65, Run: 20, Field: 40, Arm: 50 },
        meta: { color: "#DDA15E" },
      },
    ],
    options: {
      scaleProps: () => ({
        fill: "#fafafa",
        stroke: "#999",
        strokeWidth: ".2",
      }),
      rotation: 0,
    },
  },
];


function App() {
  return (
    <div>

        <div style={{margin:"25%"}}>
          <RadarChart
          />
          <StackedBar data={chartdata}
          xLegend={"x-legend"}
          yLegend={"y-legend"}
          normalSettings={{
              colorPalette: [
                  "#b388eb",
                  "#8093f1",
                  "#72ddf7",
                  "#dfccff",
                  "#fdc5f5"
              ],
              horizontal: true
          }}
          scopeSettings={{
              autoScope: false,
              maxScope: "400"
          }}/>
        </div>
        </div>
  );
}
export default App;
