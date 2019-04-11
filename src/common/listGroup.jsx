import React from 'react';
import "./listGroup.css";

const ListGroup = (props) => {
    const {items, textProperty, valueProperty, selectedItem,onItemSelect} = props;

    return (
    <ul className="list-group list-group-mine">
        {items.map(item => (
        <li 
        onClick={() => onItemSelect(item)} 
        key={item[valueProperty]} 
        className={ item === selectedItem ? "list-group-item active list-group-item-action" : "list-group-item list-group-item-action"}
        >
            {item[textProperty]}
        </li>
        ))}
    </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;