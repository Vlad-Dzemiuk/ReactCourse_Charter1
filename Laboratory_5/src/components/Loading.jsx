const Loading = ({ isLoading, children }) => {
  return (
    <div>
      {isLoading && <SpinElement />}

      {children}
    </div>
  );
};

const SpinElement = () => {
  return <div className="loader center"></div>;
};

export default Loading;
