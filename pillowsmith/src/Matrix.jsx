import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Legend, CartesianGrid, Tooltip, LabelList, ResponsiveContainer, Customized } from 'recharts';
import NewLabel from './NewLabel.jsx';

function redirectLink(){
    document.location.href="https://www.amazon.com/AIKOFUL-Siberian-Sleeping-Original-Egyptian/dp/B07VSZ51CV?th=1&linkCode=ll1&tag=pillowsmith-20&linkId=a48505c709c3201112cb64f60bda822b&language=en_US&ref_=as_li_ss_tl"
}

const data01 = [
    { x: 100, y: 100, z: 'Cool Pillow (height: 6", price: $50)'
    }]
const data02 = [
    { x: 200, y: 260, z: 240 },
    { x: 240, y: 290, z: 220 },
    { x: 190, y: 290, z: 250 },
    { x: 198, y: 250, z: 210 },
    { x: 180, y: 280, z: 260 },
    { x: 210, y: 220, z: 230 },
  ];

export default class Matrix extends PureComponent {
    render() {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="km" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{backgroundColor: "gray", opacity:"50%"}}
                content={<NewLabel />}
                onClick={redirectLink}
                wrapperStyle={{visibility: 'visible'}} />
            <Legend />
            <Scatter name="A school" data={data01} fill="#8884d8" shape="square">
                <LabelList dataKey="z" position="outside" offset="20"/>
            </Scatter>
            <Scatter name="B school" data={data02} fill="#82ca9d" shape="triangle" />
          </ScatterChart>
        </ResponsiveContainer>
      );
    }
  }


