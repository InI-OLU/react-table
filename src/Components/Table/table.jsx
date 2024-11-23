import React from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const columns = [
    {
      name: "S/N",
      width: "100px",
      selector: (row, index) => <p>{index + 1}</p>,
    },
    {
      name: "Name",
      selector: (row) => <p style={{ color: "blue" }}>{row?.name}</p>,
    },
    {
      name: "Job",
      selector: (row) => <p>{row?.job}</p>,
    },
  ];

  const data = [
    {
      name: "Agbleye",
      job: "Mechanical engineer",
    },
    {
      name: "Gbolahan",
      job: "Front end developer",
    },
    {
      name: "Inioluwa",
      job: "CNC Machinist",
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={data}
      title="MY AMBITIONS"
      pagination={true}
      paginationPerPage={5}
      paginationRowsPerPageOptions={[5, 10, 15]}
    />
  );
};

export default Table;
