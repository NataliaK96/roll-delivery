import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { MinusOutlined } from '@ant-design/icons';
import './count.css'

type Props = {
  value: number,
  inc: ()=>void,
  dec: ()=>void,
}

export const Count: React.FC<Props> = ({value, inc, dec }) => {
  return (
    <div>
		<button className='button' onClick={dec}><MinusOutlined/></button>
		<input className='value' value={value} disabled></input>
		<button className='button' onClick={inc}><PlusOutlined/></button>
	</div>
  );
};