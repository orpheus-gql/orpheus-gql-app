import React from 'react';

import {Sunburst, Treemap} from 'react-vis';


const MODE = [
  'partition-pivot',
  'binary',
  'slicedice',
  'squarify',
  'circlePack',
  'partition',
  'resquarify',
  'slice',
  'dice'
];

const STYLES = {
  SVG: {
    stroke: '#ddd',
    strokeWidth: '0.25',
    strokeOpacity: 0.5
  },
  DOM: {
    border: 'thin solid #ddd'
  }
};

export default function TreeVis(props){
    return (
      <div className="centered-and-flexed">
        <Treemap
          {...{
            animation: true,
            className: 'nested-tree-example',
            colorType: 'literal',
            colorRange: ['#88572C'],
            data: props.visObj,
            mode: MODE[0],
            renderMode: 'SVG',
            height: 500,
            width: 350,
            margin: 10,
            getSize: d => d.value,
            getColor: d => d.hex,
            style: STYLES['SVG']
          }}
        />
      </div>
    );
}
