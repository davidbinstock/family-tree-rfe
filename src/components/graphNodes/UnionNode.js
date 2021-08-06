import React from 'react';

import { Handle } from 'react-flow-renderer';

export function UnionNode ({ data, isConnectable }){
    const unionColor = "#df8220"
    const personColor = "#207DDF"
    const color3 = "#20DF23"
    const color4 = "#DF20DC"

   const unionNodeStyle = {
        background: unionColor,
        color: "#fff",
        border: '1px solid #222138',
        width: 75,
        // height: 30,
        borderRadius: "3px",
        padding: "5px",
        textAlign: "center",
        verticalAlign: "middle",
        fontSize: "12px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
        
    }

    const labelStyle ={
        verticalAlign: "middle",
    }

  return (
    <div style={unionNodeStyle}>
      <Handle
        type="source"
        position="bottom"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
   
        {data.label}
     
      <Handle
        type="target"
        position="left"
        id="a"
        style={{ top: "50%", background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position="right"
        id="b"
        style={{ top: "50%", background: '#555' }}
        isConnectable={isConnectable}
      />
    </div>
  );
};