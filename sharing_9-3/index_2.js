fetch(
  "https://jsonplaceholder.typicode.com/users?fbclid=IwAR0-ENc4OFkM4a63EhmJ3ciZBIRpErSgno7yN0mmoKkBPHYdZUhf-vdpl_4"
)
  .then(function (response) {
    // console.log(
    //     response
    // );
    return response.json();
  })

  .then(function (posts) {
    const person_list = posts.map(function (person) {
      
      return `
        <tr>
        <th>${person.id}</th>
        <<th>${person.name}</th>
        <th>${person.phone}</th>
        
        
        </tr>
        `;
    });
    // Camel case
    // Snake case
    // console.log(person_list)
    document.querySelector("table").innerHTML += person_list;
  });
