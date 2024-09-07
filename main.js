const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [10, 11, 12, 13, 14, 15, 16],
        datasets: [{
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)', 
            borderWidth: 2,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false, 
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Open & Close Menu
let aside = document.getElementById('aside');
let openIcon = document.getElementById('menu');
let closeIcon = document.getElementById('menu');

function openMenu() {
    aside.classList.add('active');
}
function closeMenu() {
    aside.classList.remove('active');
}

