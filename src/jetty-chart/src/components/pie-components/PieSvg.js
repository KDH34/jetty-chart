// 파이 차트의 SVG를 그리는 컴포넌트
import getPiePiece from "../../common/pie-common/utils/getPiePiece";
import { divideRatio } from "../../common/pie-common/utils/getDivideRatio";
// import { PieDebugMode } from "../testFile/PieDebugMode";
import { setExceptionValue } from "../../common/pie-common/utils/setExceptionValue";
import PieCircleBackground from "./PieCircleBackground";
import PieDonutBackground from "./PieDonutBackground";
import PiePiece from "./PiePiece";

const PieSvg = ({
  data,
  generalSettings,
  pieSettings,
  labelSettings,
  arcLinkLabelSettings,
  newAnimationSettings,
  // debugSettings,
}) => {
  setExceptionValue({ pieSettings, length: data.length });
  data = divideRatio({
    data,
    padAngle: pieSettings.padAngle,
    startAngle: pieSettings.startAngle,
    useAngle: pieSettings.useAngle,
    sortByValue: pieSettings.sortByValue,
  });

  const pieceData = getPiePiece({
    data,
    pieRadius: pieSettings.pieRadius,
    innerRadius: pieSettings.innerRadius,
    cornerRadius: pieSettings.cornerRadius,
    startAngle: pieSettings.startAngle,
    labelDistance: labelSettings.labelDistance,
    arcLinkLabelLineDistance: arcLinkLabelSettings.arcLinkLabelLineDistance,
    arcLinkLabelStartLine: arcLinkLabelSettings.arcLinkLabelStartLine,
    arcLinkLabelEndLine: arcLinkLabelSettings.arcLinkLabelEndLine,
  });

  return (
    <svg
      id="pie"
      width={generalSettings.width - generalSettings.paddingLeft - generalSettings.paddingRight}
      height={generalSettings.height - generalSettings.paddingTop - generalSettings.paddingBottom}
      viewBox="-2 -2 4 4"
      className="pie"
      style={{
        backgroundColor: generalSettings.backgroundColor,
        padding:
          generalSettings.paddingTop +
          "px " +
          generalSettings.paddingRight +
          "px " +
          generalSettings.paddingBottom +
          "px " +
          generalSettings.paddingLeft +
          "px ",
      }}
      opacity={generalSettings.pieOpacity}
    >
      <PieCircleBackground
        pieRadius={pieSettings.pieRadius}
        pieBackgroundColor={generalSettings.pieBackgroundColor}
        circleOpacity={generalSettings.circleOpacity}
      />
      <PieDonutBackground
        pieRadius={pieSettings.pieRadius}
        innerRadius={pieSettings.innerRadius}
        donutBackgroundColor={generalSettings.donutBackgroundColor}
        donutOpacity={generalSettings.donutOpacity}
      />
      {pieceData.map((piece, index) => (
        <PiePiece
          color={pieSettings.color[index % data.length]}
          strokeColor={pieSettings.strokeColor[index % data.length]}
          strokeWidth={pieSettings.strokeWidth}
          strokeOpacity={pieSettings.strokeOpacity}
          pieceOpacity={generalSettings.pieceOpacity}
          pieRadius={piece.pieRadius}
          innerRadius={piece.innerRadius}
          cornerInnerRadius={piece.cornerInnerRadius}
          cornerOuterRadius={piece.cornerOuterRadius}
          calcVertexGroup={piece.calcVertexGroup}
          tangentLineGroup={piece.tangentLineGroup}
          isLargeArcGroup={piece.isLargeArcGroup}
          arcLinkLabelTextColor={arcLinkLabelSettings.arcLinkLabelTextColor[index % data.length]}
          arcLinkLabelLineColor={arcLinkLabelSettings.arcLinkLabelLineColor[index % data.length]}
          arcLinkLabelFontSize={arcLinkLabelSettings.arcLinkLabelFontSize}
          arcLinkLabelFontFamily={arcLinkLabelSettings.arcLinkLabelFontFamily}
          arcLinkLabelFontStyle={arcLinkLabelSettings.arcLinkLabelFontStyle}
          arcLinkLabelFontWeight={arcLinkLabelSettings.arcLinkLabelFontWeight}
          arcLinkLabelText={arcLinkLabelSettings.arcLinkLabelTEXT}
          arcLinkLabelLineSize={arcLinkLabelSettings.arcLinkLabelLineSize}
          arcLinkLabelTextDistance={arcLinkLabelSettings.arcLinkLabelTextDistance}
          arcLinkLabelSkipAngle={arcLinkLabelSettings.arcLinkLabelSkipAngle}
          arcLinkLabelLineOpacity={arcLinkLabelSettings.arcLinkLabelLineOpacity}
          arcLinkLabelTextOpacity={arcLinkLabelSettings.arcLinkLabelTextOpacity}
          arcLinkLabelIsUse={arcLinkLabelSettings.arcLinkLabelIsUse}
          arcLinkLabelLocation={piece.arcLinkLabelLocation}
          labelLocation={piece.labelLocation}
          labelColor={labelSettings.labelColor}
          labelFontFamily={labelSettings.labelFontFamily}
          labelFontSize={labelSettings.labelFontSize}
          labelFontStyle={labelSettings.labelFontStyle}
          labelFontWeight={labelSettings.labelFontWeight}
          labelMoveX={labelSettings.labelMoveX}
          labelMoveY={labelSettings.labelMoveY}
          labelDistance={labelSettings.labelDistance}
          labelIsRotate={labelSettings.labelIsRotate}
          labelText={labelSettings.labelText}
          labelIsUse={labelSettings.labelIsUse}
          labelSkipRatio={labelSettings.labelSkipRatio}
          labelDegrees={labelSettings.labelDegrees}
          labelOpacity={labelSettings.labelOpacity}
          animationOn={newAnimationSettings.animationOn}
          animationDuration={newAnimationSettings.animationDuration}
          animationDelay={newAnimationSettings.animationDelay}
          animationTiming={newAnimationSettings.animationTiming}
          animationScale={newAnimationSettings.animationScale}
          label={piece.label}
          ratio={piece.ratio}
          value={piece.value}
          key={index}
        />
      ))}
      {/* {pieceData.map((piece, index) => (
        <PieDebugMode
          debugSettings={debugSettings.debugTool}
          pieRadius={piece.pieRadius}
          innerRadius={pieSettings.innerRadius}
          cornerOuterRadius={piece.cornerOuterRadius}
          cornerInnerRadius={piece.cornerInnerRadius}
          accumulatedAngle={piece.accumulatedAngle}
          ratio={piece.ratio}
          vertexGroup={piece.vertexGroup}
          calcVertexGroup={piece.calcVertexGroup}
          tangentLineGroup={piece.tangentLineGroup}
          cornerCircleGroup={piece.cornerCircleGroup}
          startAngle={pieSettings.startAngle}
          referenceCoordinate={piece.referenceCoordinate}
          candidatesGroup={piece.candidatesGroup}
          labelLocation={piece.labelLocation}
          labelMoveX={labelSettings.labelMoveX}
          labelMoveY={labelSettings.labelMoveY}
          key={index}
        />
      ))} */}
    </svg>
  );
};

export default PieSvg;
