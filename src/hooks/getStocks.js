const getStocks = async () => {
  await fetch("http://131.181.190.87:3000/stocks/symbols")
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      return res;
    });
};

export default getStocks;
