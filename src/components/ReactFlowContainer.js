import React from "react";
import ReactFlow, { Controls, MiniMap } from 'react-flow-renderer';
import data from '../data/elements.json';
import { UnionNode } from "./graphNodes/UnionNode";

export function ReactFlowContainer(props) {


  const nodeTypes = {
    union: UnionNode,
  };
  const unionColor = "#df8220"
  const personColor = "#207DDF"
  const color3 = "#20DF23"
  const color4 = "#DF20DC"

  // let nodes = [];
  // let edges = [];

  // for (p in data.people){
  //   const newNode ={
  //     id: p.id,
  //     type:'default',
  //     data:{ label: p.name},

  //   }
  // }



  const elements = [
      {
        id: '1',
        type: 'default',
        data: { 
              label: 'Ned', 
              extra: "test"
          },
        sourcePosition: 'right',
        position: { x: 300, y: 25 },
      },
      {
        id: '2',
        data: { label: <div>Cat</div> },
        sourcePosition: 'left',
        position: { x: 600, y: 25 },
      },
      {
        id: '3',
        data: { label: 'Union' },
        type: 'union',
        position: { x: 487, y: 30 },
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
      { id: 'e1-3', source: '1', target: '3' , targetHandle:'a'},
      { id: 'e2-3', source: '2', target: '3' , targetHandle:'b'},
      { id: 'e3-4', source: '3', target: '4' },
      { id: 'e3-5', source: '3', target: '5' },
      { id: 'e3-6', source: '3', target: '6' },
      { id: 'e3-7', source: '3', target: '7' },
      { id: 'e3-8', source: '3', target: '8' },

    ];

    return (
        <div style={{ height: "75vh"}}>
            <ReactFlow
              elements={elements}
              nodeTypes={nodeTypes}
            >

              <MiniMap
                nodeStrokeColor={(n) => {
                  if (n.type === 'input') return '#0041d0';
                  if (n.type === 'default') return '#1A192B';
                  if (n.type === 'output') return '#ff0072';
                  if (n.type === 'union') return "#df8220";
                  return '#1A192B';
                }}
                nodeColor={(n) => {
                  if (n.type === 'selectorNode') return '#1A192B';
                  return '#fff';
                }}
              />
              <Controls />
            </ReactFlow>
        </div> 
    )
;
}