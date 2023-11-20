import { useState } from "react";

function withHoc(WithComponent) {
  return (props) => {
    const [name, setname] = useState(false);

    setTimeout(() => {
      setname(true);
    }, 3000);

    return !name ? (
      "Loading........."
    ) : (
      <WithComponent  {...props}> </WithComponent>
    )

  };
}

export default withHoc;
