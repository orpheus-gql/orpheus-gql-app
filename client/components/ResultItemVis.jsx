import React from 'react';
import { Hint, FlexibleXYPlot, XYPlot, LineSeries, MarkSeries, LineMarkSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis';
// import "./node_modules/react-vis/dist/style";
import styles from './../styles/ResultItemVis.scss';
import * as d3 from 'd3-shape';

const ResultItemVis = props => {
  // get the number of resolvers we need to display
  const resolverNum = props.dataVis.resolverNum;

  // and array of LineSeries components
  // will change based on the number of resolvers we have
  const lineSeriesArray = [];

  function generateLineSeriesData(int) {
    // this should be an array of ARRAYS of objects
    // the number of 2nd level arrays we have is 
    // equal to the number of LineSeriesComponents we have
    const output = [];
    const distanceBetween = Math.floor(100 / (int + 1));

    for (let i = 1; i <= int; i += 1) {
      // each object should have equa-distant steps from 0 to 100 for the
      const step = distanceBetween * i;
      // each object should look like {x: valX, y: valY}
      // each array inside the big array should start with:
      const singleData = [{ x: 0, y: 50 }];
      singleData.push({ x: 15, y: step }, { x: 50, y: step })
      output.push(singleData);
    }
    return output;
  }

  const lineSeriesData = generateLineSeriesData(resolverNum);

  for (let i = 0; i < resolverNum; i += 1) {
    lineSeriesArray.push(<LineSeries animation={'noWobble'}
      data={lineSeriesData[i]}
      curve={"curveMonotoneX"}
      color={'black'}
      key={i * Date.now()} />)
  }

  return (
    <div className="vis-wrapper">
      <div className="result-header">
        <h5>Resolvers</h5>
      </div>
      <FlexibleXYPlot className="result-vis" >

        {lineSeriesArray}
        <LineSeries
          data={[{ x: 0, y: 0 }]}
          color={'white'}
        />
        <LineSeries
          data={[{ x: 50, y: 100 }]}
          color={'white'}
        />
      </FlexibleXYPlot>
      {/* <button className="waves-effect waves-light btn-large" onClick={() => {
        const randomResolverNum = Math.ceil(Math.random() * 20);
        props.setResolverNum(randomResolverNum)
      }
      }>Random Resolver Number is: {resolverNum}</button> */}
    </div>

  )
};

export default ResultItemVis;
