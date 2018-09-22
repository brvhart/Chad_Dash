new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'pushups',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { day: 'Monday', pushups: 20, reach: 2 },
    { day: 'Tuesday', pushups: 10, beers: 2 },
    { day: 'Wednesday', pushups: 5, beers: 3 },
    { day: 'Thursday', pushups: 5, beers: 4 },
    { day: 'Friday', pushups: 20, beers: 1 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'day',
  parseTime: false,
  // A list of names of data record attributes that contain y-values.
  ykeys: ['pushups','beers'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Pushups','Beers'],
  lineColors: ['#555','#fff']
});