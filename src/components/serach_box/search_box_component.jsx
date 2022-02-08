import React from "react";
import './search_box_component.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        type='search'
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)