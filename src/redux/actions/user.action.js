import api from "../../_api/api";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

const formateData = (data) => ({
  ...data,
  age: parseInt(data.age ? data.age : 0),
});

export const CreateUser = (data, onSuccess) => (dispatch) => {
    debugger;
  data = formateData(data);
  api
    .dCandidate()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
