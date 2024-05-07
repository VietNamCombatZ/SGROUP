const fetchData = async () => {
  const response = await fetch(
    "https://65218eeca4199548356d5dd6.mockapi.io/api/test"
  );
  const data = await response.json();
  console.log(data);
  console.log("is fetch");

  console.log(response);
};

fetchData();