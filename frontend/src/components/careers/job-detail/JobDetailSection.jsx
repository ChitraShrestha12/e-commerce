import BackButton from "../jobs/BackButton";
import JobDetailCard from "./JobDetailCard";


function JobDetailSection() {
  return (
    <>
      <div className="container">
        <BackButton/>
        <JobDetailCard/>
      </div>
    </>
  );
}

export default JobDetailSection;
