'use client'

import React from "react";
import { categories } from "./categoriesList";

const CategoriesList: React.FC<{ onCategorieChange: (categorie: string) => void }> = ({ onCategorieChange }) => {
  return (
    <>
      <h3>Categories</h3>
      {categories.map((item) => <div style={{cursor:'pointer'}} onClick={() => onCategorieChange(item)}>{item}</div>)}
    </>
  )
};

export default CategoriesList;