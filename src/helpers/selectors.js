export function getAppointmentsForDay(state, day) {
  let appointmentArr = [];
  state.days.map((dayObject) => {
    if (dayObject.name === day) {
      dayObject.appointments.forEach((apptId) => appointmentArr.push(apptId));
    }
    return null;
  });
}
 
export function getInterview(state, interview) {
  if(!interview) {  
  return null;
  }
  const interviewerInfo = state.interviewers[interview.interviewer];
  return {
    student: interview.student,
    interviewer: interviewerInfo,
  };
};

export function getInterviewersForDay(state, day) {
  let interviewersArr = [];
  state.days.map((dayObject) => {
    if (dayObject.name === day) {
      dayObject.interviewers.forEach((interviewerId) =>
        interviewersArr.push(interviewerId)
      );
    }
    return null;
  });
};
