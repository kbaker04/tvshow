const CustomError = ({ statusCode }) => {
  console.log("CustomError -> statusCode", statusCode);

  if (statusCode === 404) {
    return <h1>The resource was not found...</h1>;
  }

  return <h1>Something went wrong</h1>;
};

CustomError.getInitialProps = ({ err, res }) => {
  return { statusCode: res ? res.statusCode : err ? err.statusCode : 404 };
};

export default CustomError;
