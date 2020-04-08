const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_DEV_BASE_URL
    : process.env.REACT_APP_API_PROD_BASE_URL;

const signin = async (name = '') => {
  let response;
  try {
    response = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (response.status === 200 && response.body) {
      return response.json();
    }
  } catch (err) {
    console.error('Error');
    return null;
  }
};

const createComment = async (userId, name, surname, comment) => {
  let response;
  try {
    response = await fetch(`${BASE_URL}/comments/new-comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        name,
        surname,
        comment,
      }),
    });

    return response.json();
  } catch (err) {
    console.error('Error');
  }
};

export { signin, createComment };
