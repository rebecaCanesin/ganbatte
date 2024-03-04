'use client'

import React from "react";
import { Dropdown, Space } from "antd";
import Search from "antd/es/input/Search";
import { DownOutlined } from '@ant-design/icons';
import { MenuProps } from "antd";
import '/src/components/SearchBar/dist/styles.css'

export const items = [
  {key: '1', label:'Comedy'}, 
  {key: '2', label:'Romance'}, 
  {key: '3', label:'Fantasy'},
  {key: '4', label:'Action'},
  {key: '5', label:'Drama'},
  {key: '6', label:'School Life'},
  {key: '7', label:'Adventure'},
  {key: '8', label:'Slice of Life'},
  {key: '9', label:'Yaoi'},
  {key: '10', label:'Science Fiction'},
  {key: '11', label:'Shoujo Ai'},
  {key: '12', label:'Ecchi'},
  {key: '13', label:'Sports'},
  {key: '14', label:'Historical'},
  {key: '15', label:'Magic'},
  {key: '16', label:'Music'},
  {key: '17', label:'Mystery'},
  {key: '18', label:'Harem'},
  {key: '19', label:'Supernatural'},
  {key: '20', label:'Japan'},
  {key: '21', label:'Psychological'},
  {key: '22', label:'Thriller'},
  {key: '23', label:'Earth'},
  {key: '24', label:'Horror'},
  {key: '25', label:'Shounen'},
  {key: '26', label:'Kids'},
  {key: '27', label:'Present'},
  {key: '28', label:'Seinen'},
  {key: '29', label:'Shounen Ai'},
  {key: '30', label:'Martial Arts'}, 
  {key: '31', label:'Asia'},
  {key: '32', label:'Isekai'},
  {key: '33', label:'Mecha'},
  {key: '34', label:'Demon'},
  {key: '35', label:'Shoujo'},
  {key: '36', label:'Super Power'},
  {key: '37', label:'Fantasy World'}, 
  {key: '38', label:'Violence'}, 
  {key: '39', label:'Military'}, 
  {key: '40', label:'Parody'}
];

const SearchBar: React.FC<{ onCategorieChange:(categorie: string) => void, onSearchText: (searchText: string) => void, onDataTypeChange: (newType: string) => void }> = ({ onCategorieChange, onSearchText, onDataTypeChange }) => {
  const handleSearch = (value: string) => {
    onSearchText(value);
  };

  const handleCategoryChange:  MenuProps['onClick'] = (e) => {
    const selectedCategory = e.key as string;
    const categorieItem = items.find((item) => item?.key === e.key);
    const categorieLabel = categorieItem ? categorieItem.label : '';

    onCategorieChange(categorieLabel);
    console.log(categorieLabel);
};

  return (
    <div className="container">
      <div>
        <div onClick={() => onDataTypeChange('anime')}><span>Anime</span></div>
        <div onClick={() => onDataTypeChange('manga')}><span>Manga</span></div>
      </div>
      <Dropdown 
      menu={{
      items,
      onClick: handleCategoryChange,
    }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Categories
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <Search placeholder="input search text" allowClear onSearch={handleSearch} style={{ width: 200 }} />

    </div>
  );
};

export default SearchBar;