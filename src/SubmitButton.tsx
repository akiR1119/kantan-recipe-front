import React from "react";

type SubmitButtonProps = {
  onSubmitClick: () => void;
};

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <div>
      <button className="submit-button" onClick={props.onSubmitClick}>
        submit
      </button>
    </div>
  );
};

export default SubmitButton;
