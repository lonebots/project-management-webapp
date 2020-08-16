export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database and then continue the dispatch
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "raji",
        authorLastName: "suresh",
        authorid: 10,
        createdAt: new Date(),
      })
      .then(() => dispatch({ type: "CREATE_PROJECT", project }))
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
