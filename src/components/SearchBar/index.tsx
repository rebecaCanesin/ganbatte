'use client'

import React, { SetStateAction, useState } from "react";
import { Button, Input } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";

const SearchBar: React.FC<{ onDataTypeChange: (newType: string) => void }> = ({ onDataTypeChange }) => {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
      <div>
        <Button onClick={() => onDataTypeChange('anime')}>Anime</Button>
        <Button onClick={() => onDataTypeChange('manga')}>Manga</Button>
      </div>
      <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />

    </div>
  );
};

export default SearchBar;