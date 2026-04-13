import React from 'react'
import ValuesHeader from '../about/ValuesHeader'
import ValuesGrid from '../about/ValuesGrid'

function ValuesSection() {
  return (
    <div className="values-section">
        <div className="container">
          <ValuesHeader/>
          <ValuesGrid/>
        </div>
      </div>
  )
}

export default ValuesSection