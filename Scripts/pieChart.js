const pieCtx = document.getElementById('pieChart').getContext('2d');
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['Electronics', 'Clothing', 'Groceries', 'Books'],
      datasets: [{
        label: 'Product Categories',
        data: [300, 50, 100, 150],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A6'],
        borderColor: 'white',
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Top Selling Categories'
        }
      }
    }
  });
