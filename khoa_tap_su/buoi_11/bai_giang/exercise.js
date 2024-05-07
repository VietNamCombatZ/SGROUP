// fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users");

// const getInfoBtn = document.getElementsByClassName(button);



const getAllUsers = async () => {
    try {
        const res = await fetch (
            "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users", 
            {method:  "GET"}

        );
        console.log(await res.json());
    }
    catch(err)
    {
        console.error(err);
    }
}

const getUserID = async () => {
  try {
    const res = await fetch(
      "https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users",
      { method: "GET" }
    );
    let userID = document.getElementById("ID");
    
    return userID = 
  } catch (err) {
    console.error(err);
  }
};
