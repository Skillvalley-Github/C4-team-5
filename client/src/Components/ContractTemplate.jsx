import React from "react";
import ReactToPrint from "react-to-print";

function ContractTemplate() {
  return (
    <>
      <ReactToPrint
        trigger={() => {
          return <></>;
        }}
        content={() => this.componentRef}
      />
    </>
  );
}

export default ContractTemplate;
