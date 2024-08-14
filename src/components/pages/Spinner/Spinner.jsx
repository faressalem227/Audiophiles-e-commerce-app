import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

const override = {
    display: 'block',
    display: 'flex',
    justifyContent: 'center',
    margin: '220px auto'
}

const Spinner = ({loading}) => {
  return (
    <SyncLoader 
        color='#D87D4A'
        loading={loading}
        cssOverride={override}
        size={20}
    />
  )
}

export default Spinner