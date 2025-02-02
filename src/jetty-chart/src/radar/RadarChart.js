import React, { useEffect } from 'react';
import './Radar.css';
import Radar from './RadarShape'
import { checkRadarChart } from '../common/radar-common/exception/check-radar-exception';


const data = [
      {
        data: { value1: 75, value2: 60, value3: 60, value4: 50, value5: 40, value6: 50 },
        meta: { color: "#8258FA", fill: "#8258FA", opacity: "25%" },
      },
      {
        data: { value1: 20, value2: 20, value3: 20, value4: 20, value5: 20, value6: 50 },
        meta: { color: "#81F7F3", fill: "#81F7F3", opacity: "100%" },
      },
      // {
      //   data: { value1: 80, value2: 60, value3: 50, value4: 70, value5: 60 },
      //   meta: { color: "#2E2EFE", fill: '#8258FA', opacity: "25%" },
      // },
      // {
      //   data: { value1: 45, value2: 60, value3: 80, value4: 65, value5: 50 },
      //   meta: { color: "#FF0000", fill: '#8258FA', opacity: "25%" },
      // },
      // {
      //   data: { value1: 65, value2: 65, value3: 20, value4: 40, value5: 50 },
      //   meta: { color: "#DDA15E", fill: '#8258FA', opacity: "25%" },
      // },

];

const noSmoothing = points => {
  let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
  for (let i = 1; i < points.length; i++) {
    d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
  }
  return d + 'z';
};

const setViewBox = options =>
  `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${
    options.size
  }`;

  const normalOptions = {
    size: 300,
    axes: true,
    scales: 3, 
    captions: true, 
    dots: true, 
    useValue: false,
    defaultValue:300,
    negativeNumber: false,
    animationOn:true,
    zoomDistance: 1.2, 
    smoothing: noSmoothing, 
    captionMargin: 10,
    setViewBox,
    axisProps: () => ({ className: 'axis', fill:"#8258FA", color:"red" }),
    scaleProps: () => ({ className: 'scale', fill: '#8258FA', opacity: "100%" }),
    shapeProps: () => ({ className: 'shape' }),
    dotProps: () => ({
      className: 'dot',
      fill:"#8258FA"
    }),
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontSize: 10,
      fontFamily: 'sans-serif',
    }),
    wrapCaptionAt: 15,
    captionLineHeight: 20,
    rotation: 0,
    marginTop:0,
    marginBottom:0,
    marginLeft:0,
    marginRight:0,
    maxValue:0,
  };


const keys = {
  value1: "Power",
  value2: "Hit",
  value3: "Run",
  value4: "Field",
  value5: "Arm",
  value6: "Vision"
}

const RadarChart = (props) => {
  const id = props.id
  const result = checkRadarChart({normalOptions, data})
  const size = result.normalOptions.size
  const chartOptions = {
    ...result.normalOptions,
    size,
  };

  const { setViewBox } = chartOptions;
  const chart = Radar(keys, data, chartOptions);

















  
  return (
    <svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={setViewBox(chartOptions)}
      id={id}
    >
      {chart}
    </svg>
  );
};

export default RadarChart;
