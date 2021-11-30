import { useEffect, useReducer } from "react";
import axios from "axios";
import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW,
} from "reducers/application";

export default function useApplicationData(props) {
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => dispatch({ type: SET_DAY, day: day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      });

      let webSocket = new WebSocket("ws://localhost:8001");

      webSocket.onopen = () => {};

      webSocket.onmessage = function (event) {
        const info = JSON.parse(event.data);
        if (info.type === SET_INTERVIEW) {
          dispatch({
            type: SET_INTERVIEW,
            id: info.id,
            interview: info.interview,
          });
        } else {
          dispatch({
            type: SET_INTERVIEW,
            id: info.id,
            interview: null,
          });
        }
      };
    });
  }, []);

  const bookInterview = (id, interview) => {
    console.log("id",id ,"interview", interview);
    return axios.put(`/api/appointments/${id}`, { interview }).then((r) =>
      dispatch({
        type: SET_INTERVIEW,
        id,
        interview,
      })
    );
  };

  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`).then((r) =>
      dispatch({
        type: SET_INTERVIEW,
        id,
        interview: null,
      })
    );
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}