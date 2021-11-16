import React, { useState } from "react";

import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import "./styles.scss";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  //to reset student name and interviewer
  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  // form cancel button
  const cancel = () => {
    reset();
    props.onCancel();
  };

  // to show error message if input field is empty
  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("Interviewer cannot be blank");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            type="text"
            placeholder="Enter Student Name"
            /*
          This must be a controlled component
        */
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onCancel={cancel}>
            Cancel
          </Button>
          <Button confirm onSave={validate}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}