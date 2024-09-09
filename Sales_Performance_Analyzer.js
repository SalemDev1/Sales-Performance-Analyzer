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

// Task 2- Create a Function to Determine Performance Rating
function determinePerformanceRating(averageSales) {
    if(averageSales >10000) {
        return "Excellent";
    } else if (averageSales >= 7000 && averageSales <= 10000) {
        return "Good";
    } else if (averageSales >= 4000 && averageSales <= 7000) {
        return "Satisfactory";
    } else { return "Needs Improvement";

    }
};

const aliceAvgSales = calculateAverageSales(alicesales);
console.log("Alice's performance rating: "+ determinePerformanceRating(aliceAvgSales));

// Task 3- Create a Function to Identify Top and Bottom Performers
const avgSalesData= salesData.map(person=>({
  name:person.name,
   totalSales:person.sales.reduce(function(current,sale){return current+sale},0) 
}));
function findTopAndBottomPerformers(salesData) {
var topPerformer = salesData.reduce(function(top,person){
    return (person.totalSales>top.totalSales)? person:top;

});

var bottomPerformer = salesData.reduce(function(bottom,person){
    return (person.totalSales<bottom.totalSales)? person:bottom;

});
return {topPerformer,bottomPerformer};



}
console.log("Top Performer: " + findTopAndBottomPerformers(avgSalesData).topPerformer.name + " with total sales of $" + findTopAndBottomPerformers(avgSalesData).topPerformer.totalSales);
console.log("Bottom Performer: " + findTopAndBottomPerformers(avgSalesData).bottomPerformer.name + " with total sales of $" + findTopAndBottomPerformers(avgSalesData).bottomPerformer.totalSales);


console.log(findTopAndBottomPerformers(avgSalesData));