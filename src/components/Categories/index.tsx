'use client'

import React from "react";
import { categories } from "./categoriesList";
import { CategorieItem, CategoriesContainer, ListContainer } from "./styles";

const CategoriesList: React.FC<{ onCategorieChange: (categorie: string) => void }> = ({ onCategorieChange }) => {
  return (
    <>
      <CategoriesContainer>
        <h3>Categories</h3>
        <ListContainer>
          {categories.map((item, index) => (
            <CategorieItem key={index} onClick={() => onCategorieChange(item)}>
              {item}
            </CategorieItem>
          ))}
        </ListContainer>
      </CategoriesContainer>
    </>
  )
};

export default CategoriesList;