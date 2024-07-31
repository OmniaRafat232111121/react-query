import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import MapComponent from './component/MapComponent';

const layout = [
  { i: 'map', x: 0, y: 0, w: 8, h: 6, isResizable: true, isDraggable: true, resizeHandles: ['se', 'sw', 'ne', 'nw'] },
];


const App = () => {

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={90}
      width={1450}
      draggableHandle=".react-grid-item"
      isResizable
      
    >
      <div key="map" className="react-grid-item" style={{ display: 'flex', height: '100%', backgroundColor: 'gray', padding: '10px' }}>
        <MapComponent />
      </div>
    </GridLayout>
  );
};

export default App;
