// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// AREA CHART


/*var areaChartOptions = {
  series: [{
    name: 'Purchase Orders',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Orders',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};
var areaChart = new ApexCharts(document.querySelector("#myChart"), areaChartOptions);
areaChart.render();*/



let labels = ['Nov 2022', 'Dec 2022', 'Jan 2023', 'Feb 2023'];
let itemData = [85, 82, 83, 80];

const data = {
  labels: labels,
  datasets: [{
    data: itemData
  }]          
};
const config = {
  type:'area',
  data: data,
  options: {
    plugins: {
      legends: {
        display: false
      },
      title: {
        display: true,
        text: "Tracking of weight:"
      }
    }
  }
}
/*const chart = new chart(
  document.getElementById('myChart'),
);
var areaChart = new ApexCharts(document.querySelector("#myChart"), areaChartOptions);
areaChart.render()*/
