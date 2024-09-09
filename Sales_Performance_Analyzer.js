//Sales Performance Analyzer

// Task 1- Create a Function to Calculate Average Sales
const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] }
  ];
  
  function calculateAverageSales(sales) {
    let totalSales = sales.reduce(function(sum, sale) {
        return sum + sale;
    }, 0);
    return totalSales / sales.length;
} 
const alicesales = salesData[0].sales;
console.log (calculateAverageSales(alicesales)
);
