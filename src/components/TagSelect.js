import React from "react";
const TagSelect = ({ tags, onChange, tag }) => {
  return (
    <div>
      <select onChange={onChange} value={tag.id} >
        {tags.map((tag) => {
          return <option key={tag.id} value={tag.id} >{tag.name}</option>;
        })}
      </select>
    </div>
  );
};

export default TagSelect;
