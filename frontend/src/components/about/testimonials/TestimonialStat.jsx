import React from 'react'

function TestimonialStat({value,label}) {
  return (
    <div className="testimonial-stat">
          <div className="testimonial-stat-number">{value}</div>
          <div className="testimonial-stat-label">{label}</div>
        </div>
  )
}

export default TestimonialStat