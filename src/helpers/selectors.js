export function getAppointmentsForDay(state, day) {
  const getAppointmentsForDay = (state, day) => {
    let appointmentArr = [];
    state.days.map((dayObject) => {
      if (dayObject.name === day) {
        dayObject.appointments.forEach((apptId) => appointmentArr.push(apptId));
      }
      return null;
    });
    return matchIds(state.appointments, appointmentArr);
  };
  
}