import { useState } from "react";

function withHoc(WithComponent) {
  return (props) => {
    const [book, setBook] = useState(0);

    setTimeout(() => {
      setname(true);
    }, 3000);

    return <WithComponent {...props} book={book} setBook={setBook}>
      {" "}
    </WithComponent>;
  };
}

export default withHoc;
