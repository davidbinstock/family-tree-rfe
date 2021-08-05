import React from "react";
import ReactFlow from 'react-flow-renderer';

export function ReactFlowContainer() {

    const elements = [
        {
          id: '1',
          type: 'default',
          data: { 
                label: 'Ned', 
                extra: "test"
            },
          position: { x: 325, y: 25 },
        },
        {
          id: '2',
          data: { label: <div>Cat</div> },
          position: { x: 575, y: 25 },
        },
        {
          id: '3',
          data: { label: 'Union' },
          position: { x: 450, y: 100 },
        },
        {
          id: '4',
          data: { label: 'Robb' },
          position: { x: 50, y: 175 },
        },
        {
          id: '5',
          data: { label: 'Sansa' },
          position: { x: 250, y: 175 },
        },
        {
          id: '6',
          data: { label: 'Arya' },
          position: { x: 450, y: 175 },
        },
        {
          id: '7',
          data: { label: 'Bran' },
          position: { x: 650, y: 175 },
        },
        {
          id: '8',
          data: { label: 'Rickon' },
          position: { x: 850, y: 175 },
        },

        // edges
        { id: 'e1-3', source: '1', target: '3' },
        { id: 'e2-3', source: '2', target: '3' },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e3-6', source: '3', target: '6' },
        { id: 'e3-7', source: '3', target: '7' },
        { id: 'e3-8', source: '3', target: '8' },
 
      ];

    return (
        <div style={{ height: 300 }}>
            <ReactFlow elements={elements} />
        </div> 
    )
;
}