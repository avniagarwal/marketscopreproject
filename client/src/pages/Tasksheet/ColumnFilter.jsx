import React from 'react';
import Select from 'react-select';

const ColumnFilter = ({ column }) => {
  const recruiterOptions = [
    { value: 1,
      label: 'Ishita'
    },
    {
      value: 2,
      label: 'Avni'
    }
  ]
  const { filterValue, setFilter } = column
  const handleChangeName = (e) => {
    setFilter(e.target.value)
  }
  return (
    <span>
      Search:{' '}
      <input
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
      />
    </span>
  )
};

export default ColumnFilter;