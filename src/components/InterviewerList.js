import React from "react" ;
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

 // to show list of interviewers
 export default function InterviewerList(props) {

 const interviewers = props.interviewers.map(interviewer => {
  return (
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      
      selected={interviewer.id === props.interviewer}
      setInterviewer={() => props.setInterviewer(interviewer.id)}
    />
  );
});
return (
  <li className={interviewers} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    {props.selected && props.name}
  </li>
);
 }