export const firstParagraph = () => {
  return fetch(
    `https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-1.json`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      mode: 'no-cors'
    }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const secondParagraph = () => {
  return fetch(
    `https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-2.json`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json'
      },
      mode: "no-cors",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
