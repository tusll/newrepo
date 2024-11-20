import React from "react";

const ConditionalRendering = (props) => {
    const ValidPassword = () => <h1>Valid Password</h1>;
    const InvalidPassword = () => <h1>Invalid Password</h1>;
    const password = ({ isvalid }) => {
      if (isvalid) {
        return <ValidPassword />;
      } else {
        return <InvalidPassword />;
      }
    };
};

export default ConditionalRendering;
