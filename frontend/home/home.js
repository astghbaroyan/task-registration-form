/* eslint-disable no-undef */
'use strict';

const openMenu = document.querySelector('#open');
const closeMenu = document.querySelector('#close');
const navigation = document.querySelector('.nav');
const result = document.querySelector('.result');
const bell = document.querySelector('#bell');
const circle = document.querySelector('.fa-circle');

navigation.style.display = 'flex';
openMenu.addEventListener('click', () =>  {
    navigation.style.display = 'flex';
});
closeMenu.addEventListener('click', () =>  {
    navigation.style.display = 'none';
});

result.style.display = 'none';
bell.addEventListener('click', () =>  {
    if (result.style.display === 'none') {
        result.style.display = 'flex';
    } else {
        result.style.display = 'none';
    }
});

circle.style.display = 'block';
bell.addEventListener('click', () =>  {
    circle.style.display = 'none';
});

google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
    const chartDiv = document.getElementById('chart_div');
    const data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', '$');

    data.addRows([
        [0, 0],   [1, 100],  [2, 200],  [3, 300],  [4, 400],  [5, 500],
        [6, 600],  [7, 650],  [8, 700],  [9, 850],  [10, 1050], [11, 1200],
        [12, 1350], [13, 1500], [14, 1650], [15, 1800], [16, 1950], [17, 2150],
        [18, 2400], [19, 2400], [20, 2400], [21, 2400],
    ]);

    var options = {
        vAxis: {
            title: 'Sales($)',
        },
        backgroundColor: '#fff',
    };

    const chart = new google.visualization.LineChart(chartDiv);
    chart.draw(data, options);
}
