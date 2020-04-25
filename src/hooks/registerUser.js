const registerUser = (email, password) => {
  const post = {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch("http://131.181.190.87:3000/user/register", post).then((response) => {
    //    console.log(response.json());
    return response.json();
  });
};

export default registerUser;
