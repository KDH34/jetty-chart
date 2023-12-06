import { checkChartSize, checkLimit, checkMargin, checkNegative, checkSize } from "../utils/radar-position";

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



const normalRadarSetting = {
  normalSetting:{
    size: 300,
    animationOn: true,
    zoomDistance: 1.2,
    rotation: 0,
    marginTop:0,
    marginBottom:0,
    marginLeft:0,
    marginRight:0,
    maxValue:0,
    viewBox: ""
  },
  scaleSetting: {
    scales: 3,
    useValue: false,
    defaultValue: 300,
    negativeNumber: false,
    fill: "#fafafa",
    stroke: "#999",
    strokeWidth: ".2",
  },
  axisSetting: {
    axes: true,
    color: "",
    stroke: "",
    strokewidth: ""
  },
  dotSetting: {
    dots: true,
    fill: "",
  },
  keySetting: {
    keyMargin: 10,
    wrapCaptionAt: 15,
    captionLineHeight: 20,
    className: 'caption',
    textAnchor: 'middle',
    fontSize: 10,
    fontFamily: 'sans-serif',
  }
}


export const checkRadarChart = ({normalOptions, data})=>{
  const result = {
    normalOptions, data
  };

  const Checkedmargin = checkMargin({marginTop:result.normalOptions.marginTop, marginBottom:result.normalOptions.marginBottom, marginLeft:result.normalOptions.marginLeft,marginRight:result.normalOptions.marginRight});
  result.normalOptions.marginTop = Checkedmargin.marginTop
  result.normalOptions.marginRight = Checkedmargin.marginRight
  result.normalOptions.marginBottom = Checkedmargin.marginBottom
  result.normalOptions.marginLeft = Checkedmargin.marginLeft

  result.normalOptions.maxValue = checkLimit(data)


  if (result.normalOptions.useValue) {
    result.normalOptions.maxValue =  result.normalOptions.defaultValue
  }


  if (result.normalOptions.negativeNumber) {
    result.data = checkNegative({data, maxValue: result.normalOptions.maxValue})
    result.normalOptions.maxValue = checkLimit(data)
    
  }




  return result;
};