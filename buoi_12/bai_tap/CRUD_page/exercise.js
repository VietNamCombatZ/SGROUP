// fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users");

// const getInfoBtn = document.getElementsByClassName(button);

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

const getUserID = async () => {
  try {
    let userID = document.getElementById("ID").value;
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" + userID,
      { method: "GET" }
    );

    console.log(await res.json());
  } catch (err) {
    console.error(err);
  }
};

const deleteUserByID = async () => {
  try {
    let userID = document.getElementById("ID").value;
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" + userID,
      { method: "Delete" }
    );
  } catch (err) {
    console.error(err);
  }
};

async function createUserByID() {
  try {
    let userID = document.getElementById("ID").value;
    let userEmail = document.getElementById("email").value;
    let userPass = document.getElementById("pass").value;

    console.log({
      id: userID,
      email: userEmail,
      password: userPass,
    });


    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" + userID,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userID,
          email: userEmail,
          password: userPass,
        }),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to create user");
    }
  } catch (err) {
    console.error(err);
  }
};


async function updateUserByID() {
  try {
    let userID = document.getElementById("ID").value;
    let userEmail = document.getElementById("email").value;
    let userPass = document.getElementById("pass").value;

    console.log({
      id: userID,
      email: userEmail,
      password: userPass,
    });

    

    
    
      const res = await fetch(
        "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" + userID,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userID,
            email: userEmail,
            password: userPass,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to update user");
      }

    
    
    
  } catch (err) {
    console.error(err);
  }
};

