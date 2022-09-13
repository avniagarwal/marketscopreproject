import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import './GlobalFilter.css';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  })
// const GlobalFilter = ({ filter, setFilter }) => {
//   const [value, setValue] = useState(filter)
//   const onChange = useAsyncDebounce(value => {
//     setFilter(value || undefined)
//   },1000)
  return (
    <span>
      Search:{' '}
      <input
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      className="sr"/>
      {/* <button className="bttnsG">Go</button> */}
    </span>
  )
}

export default GlobalFilter;
