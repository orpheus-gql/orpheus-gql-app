import React from 'react';
import { Hint, FlexibleXYPlot, XYPlot, LineSeries, MarkSeries, LineMarkSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis';
// import "./node_modules/react-vis/dist/style";
import styles from './../styles/ResultItemVis.scss';
import * as d3 from 'd3-shape';

const ResultItemVis = props => {
  // get the number of resolvers we need to display

  // const resolverCount = Math.ceil(Math.random() * 3);
  const resolverCount = 3
  const colorArray = ["red", "green", "black"];
  // create an array of LineSeries components
  // based on the number of resolvers
  const resolverLines = {
    "0": [[{ x: 0, y: 50 }, { x: 100, y: 50 }]],
    "1": [[{ x: 0, y: 50 }, { x: 15, y: 100 }, { x: 50, y: 100 }, { x: 100, y: 100 }], [{ x: 0, y: 50 }, { x: 50, y: 0 }, { x: 100, y: 0 }]],
    "2": [[{ x: 0, y: 50 }, { x: 15, y: 100 }, { x: 50, y: 100 }, { x: 100, y: 100 }], [{ x: 0, y: 50 }, { x: 50, y: 50 }, { x: 100, y: 50 }], [{ x: 0, y: 50 }, { x: 15, y: 0 }, { x: 50, y: 0 }, { x: 100, y: 0 }]]
  }

  const bottomLine = [{ x: 0, y: 0 }]
  const topLine = [{ x: 100, y: 100 }]
  const base = [{ x: 0, y: 50 }, { x: 10, y: 50 }, { x: 19, y: 50 }, { x: 25, y: 50 }];
  const lineSeriesArray = [];

  for (let i = 0; i < resolverCount; i += 1) {
    const resolverLinesKey = (resolverCount - 1).toString();
    console.log('resolverLinesKey is', resolverLinesKey);
    lineSeriesArray.push(<LineSeries animation={'noWobble'}
      data={resolverLines[resolverLinesKey][i]}
      curve={"curveMonotoneX"}
      color={'red'} />)
  }
  // lineSeriesArray.push(<LineSeries data={base} color="yellow" />);


  // we can include grid lines or not
  // this is for development demo purposes
  // same with axises
  return (
    <div className="vis-wrapper">
      <FlexibleXYPlot className="party" >

        {lineSeriesArray}
        <LineSeries data={topLine} />
        <LineSeries data={bottomLine} />
        {/* <Hint value={{ x: 0, y: 50 }} style={{ fontSize: 20, color: 'black' }} align={{ horizontal: 'auto', vertical: 'top' }}>
          <div className="hinty">
            <p style={{ fontFamily: 'sans-serif', marginLeft: '-50px' }}>{`{Resolver}`}</p>
          </div>
        </Hint> */}

      </FlexibleXYPlot>
      {/* <p>This is the resolver</p> */}
    </div>

  )
};

export default ResultItemVis;