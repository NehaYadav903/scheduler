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
{mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back(CANCEL)}
          onSave={save}
/>
)}
 {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
</article>
);
}