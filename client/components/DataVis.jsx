import React, {useState} from 'react';


import {Sunburst, Treemap, Hint} from 'react-vis';


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

export default function DataVis(props){
  const [hoverState, setHoverState] = useState(false);
    return (
      <div className="centered-and-flexed"
      onMouseOver={()=>{
        setHoverState(!hoverState)}} >
        <Sunburst
          {...{
            animation: true,
            className: 'nested-tree-example',
            colorType: 'literal',
            data: props.visObj,
            mode: MODE[0],
            renderMode: 'SVG',
            height: 500,
            width: 350,
            margin: 10,
            getLabel: d=>d.name,
            getSize: d => d.value,
            getColor: d => {
              if (d.value === undefined){
                return 'rgba(0,0,0,0)'
              }
              const r = d.value * 100;
              const g = 200;
              const b = 200;
              return `rgb(${r},${g},${b})`
            },
            style: STYLES['SVG']
          }}
        >
      {
        hoverState ? (
        <Hint  value = {{x:50, y:50}}> 
          <h1> asdfasdfasdf</h1>
        </Hint>) : <p>nothing</p>
      }
      </Sunburst>
      </div>
    );
}
