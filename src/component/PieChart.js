import React from 'react';

const ProductStatsSummary = ({ filteredRecords, selectedMonth }) => {
  // Calculate total number of products
  const totalProducts = filteredRecords.length;

  // Calculate number of sold products
  const totalSoldProducts = filteredRecords.filter(record => record.sold).length;

  // Calculate number of not sold products
  const totalNotSoldProducts = totalProducts - totalSoldProducts;

  return (
    <div>
      <h2>Product Statistics for {selectedMonth || 'All Months'}</h2>
      <p>Total Products: {totalProducts}</p>
      <p>Sold Products: {totalSoldProducts}</p>
      <p>Not Sold Products: {totalNotSoldProducts}</p>
    </div>
  );
};

export default ProductStatsSummary;
