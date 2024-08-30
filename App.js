import React from "react";
import Filter from "./Filter";

const ParentComponent = () => {
  const dropdownContent = [
    {
      name: "name",
      label: "Name",
      inputType: "text",
      placeholder: "Enter name",
    },
    {
      name: "age",
      label: "Age",
      inputType: "number",
      placeholder: "Enter age",
    },
    {
      name: "gender",
      label: "Gender",
      inputType: "text",
      placeholder: "Enter gender",
    },
  ];

  return (
    <div>
      <Filter buttonName="Filter Options" dropdownContent={dropdownContent} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ParentComponent />);

//Create the Filter component. If user click on the filter button it will
//open the dropdown as shown in the Figma. DropDown content should be dynamic like i can send the dropdown content from parent component like their name and input type.
//i can also change the name of the filter button using props has context menu
