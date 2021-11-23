import React, {useEffect} from "react" ;

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";

import "./styles.scss";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

return (
<article className="appointment" data-testid="appointment">
<Header time={props.time} />
{props.interview ? (
  <>
    <Show student={props.interview.student} interviewer={props.interview.interviewer.name} />
  </>
) : (
  <>
    <Empty />
  </>
)}
</article>
);
}