const getStocks = () => {
  fetch("http://131.181.190.87:3000/stocks/symbols")
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export default getStocks;
