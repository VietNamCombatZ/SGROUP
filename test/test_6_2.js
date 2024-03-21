const getAllUsers = async () => {
  try {
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users",
      { method: "GET" }
    );
    console.log(await res.json());
  } catch (err) {
    console.error(err);
  }
};

const getIDuser = async () => {
  const id = document.getElementById("ID").value;
  try {
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" + id,
      { method: "GET" }
    );
    console.log(await res.json());
  } catch (err) {
    console.error(err);
  }
};

const DeleteUserByID = async () => {
  const id = document.getElementById("ID").value;
  try {
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" + id,
      { method: "Delete" }
    );
  } catch (error) {
    console.error(error);
  }
};


