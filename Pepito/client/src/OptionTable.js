// class OptionTable
import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";   // in npm library
import "react-table/react-table.css";   // (!) to be analysed

class OptionTable extends React.Component {
  constructor() {
    super();
    };
  }
  render() {
    /** @dev retrieve pepito disguise options from props */
    const data = [        // array = rows, array components = JSON key:value pairs
        {component: "topType", option: this.props.topType},
        {component: "hatColor", option: this.props.hatColor},
        {component: "accessoriesType", option: this.props.accessoriesType},
        {component: "hairColor", option: this.props.hairColor},
        {component: "facialHairType", option: this.props.facialHairType},
        {component: "clotheType", option: this.props.clotheType},
        {component: "clotheColor", option: this.props.clotheColor},
        {component: "eyeType", option: this.props.eyeType},
        {component: "eyebrowType", option: this.props.eyebrowType},
        {component: "mouthType", option: this.props.mouthType},
        {component: "skinColor", option: this.props.skinColor},
    ];
    const columns = [       // our table has 2 columns
        {Header: "AvatarComponent", accessor: "component"}  // Header is any string, accessor match the JSON key
        {Header: "Option", accessor: "option"}              // a dropdown menu to select an option of the component
    ];
    return (
      <div>
        <ReactTable                // ReactTable is a component 
          data={data}              // props for ReactTable
          columns={columns}        // props for ReactTable
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default OptionTable;
