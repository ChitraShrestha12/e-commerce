import React from "react";

function JobCard({title,description,location,type,salary}) {
  return (
    <div class="job-card">
      <div class="job-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div class="job-meta">
          <span>
            <i class="fas fa-map-marker-alt"></i> {location}</span>
          <span>
            <i class="fas fa-briefcase"></i> {type}
          </span>
          <span>
            <i class="fas fa-dollar-sign"></i> {salary}
          </span>
        </div>
      </div>
      <a href="#" class="apply-btn">
        Apply Now →
      </a>
    </div>
  );
}

export default JobCard;
