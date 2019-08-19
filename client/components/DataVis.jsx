import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import { Sunburst, Treemap, Hint } from 'react-vis';
import { AutoSizer } from 'react-virtualized';
import styles from './../styles/DataVis.scss';

const makeVisFlexible = Component => {
  return class extends React.Component {
    static propTypes = {
      ...Component.propTypes,
      height: PropTypes.number,
      width: PropTypes.number
    };

    static displayName = `Flexible${Component.displayName || Component.name || 'Component'}`;

    constructor(props) {
      super(props);
      this.state = {
        height: 0,
        width: 0
      };
    }

    componentDidMount() {
      this.setSize();
      this.observer = new ResizeObserver(() => this.setSize());
      this.observer.observe(this.node);
    }

    componentWillUnmount() {
      this.observer.disconnect();
    }

    setSize = () => {
      const { height, width } = this.node.getBoundingClientRect();
      this.setState({ height, width });
    };

    render() {
      const { height, width } = this.state;

      return (
        <div
          ref={node => {
            if (node) {
              this.node = node;
            }
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <Component height={height} width={width} {...this.props} />
        </div>
      );
    }
  };
};

const FlexibleSunburst = makeVisFlexible(Sunburst);
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

function DataVis(props) {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div className="sunburst-wrapper"
      onMouseOver={(data) => {
        setHoverState(!hoverState)
      }} >
      <FlexibleSunburst
        padAngle={0.01}
        hideRootNode
        colorType='literal'
        data={props.visObj}

        animation='true'
        className='sunburst'
        getLabel={d=>d.name}
        getSize={d => d.value}
        getColor={d => {
          if (d.value === undefined) {
            return 'rgba(0,0,0,0)'
          }
          const r = d.value * 100;
          const g = 200;
          const b = 200;
          return `rgb(${r},${g},${b})`
        }
        }
      />
    </div >
  );
}

export default DataVis;
