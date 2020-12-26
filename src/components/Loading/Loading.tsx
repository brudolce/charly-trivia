import React from "react";
import LoadingStyles from "./Loading.styles";

interface LoadingProps {
  loading?: boolean;
  children?: any;
}

const Loading: React.ComponentType<LoadingProps> = ({
  loading,
  children,
}: LoadingProps) => {
  const CSS = LoadingStyles.factory();

  return loading ? (
    <div style={CSS.loadingContainer()}>
      <img
        src="https://media.giphy.com/media/wnYB3vx9t6PXiq1ubB/giphy.gif"
        alt="loading"
        height="200px"
      />
    </div>
  ) : (
    <div style={{width:"100%",height:'100%'}}>{children}</div>
  );
};

export default Loading;
