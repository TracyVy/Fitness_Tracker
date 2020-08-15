init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    console.log("getLastWorkout", workout);
    if (workout) {
      //location.search = "?id=" + workout._id;
      console.log("?id=" + workout._id);
    } else {
      document.querySelector("#continue-btn").classList.add("d-none");
    }
  }
}
