function chunk(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

var data = [{
    img: "img/senate-race.png",
    title: "Forecasting the race for the Senate",
    description: "this is a description",
    link: "https://projects.fivethirtyeight.com/2018-midterm-election-forecast/senate/?ex_cid=rrpromo",
    button: "Read More",
    label: ["block"],
    type: "Bar Chart"
  },
  {
    img: "img/bubble-treemap.png",
    title: "Bubble Treemaps for Uncertainty Visualization (InfoVis Paper)",
    description: "this is a description",
    link: "https://vimeo.com/230840520",
    button: "Read More",
    label: ["block"],
    type: "Treemap"
  },
  {
    img: "img/vsup.png",
    title: "Value-Suppressing Uncertainty Palettes",
    description: "this is a description",
    link: "https://medium.com/@uwdata/value-suppressing-uncertainty-palettes-426130122ce9",
    button: "Read More",
    label: [""],
    type: "Palette"

  },
  {
    img: "img/bracket-probabilities.png",
    title: "Bracket Probabilities to Visualize Match Prediction",
    description: "this is a description",
    link: "https://twitter.com/IneffectiveMath",
    button: "Read More",
    label: ["block", "time"],
    type: ""
  },
  {
    img: "img/income-college.png",
    title: "Some Colleges Have More Students From the Top 1 Percent Than the Bottom 60. Find Yours.",
    description: "this is a description",
    link: "https://www.nytimes.com/interactive/2017/01/18/upshot/some-colleges-have-more-students-from-the-top-1-percent-than-the-bottom-60.html",
    button: "Read More",
    label: ["block"],
    type: "Treemap"
  },
  {
    img: "img/misleading-job-report.png",
    title: "How Not to Be Misled by the Jobs Report",
    description: "this is a description",
    link: "https://www.nytimes.com/2014/05/02/upshot/how-not-to-be-misled-by-the-jobs-report.html",
    button: "Read More",
    label: ["block"],
    type: "Bar Chart"
  },
  {
    img: "img/dither.png",
    title: "The dithering multivariate correlation matrix",
    description: "this is a description",
    link: "https://github.com/mjskay/uncertainty-examples/blob/master/multivariate-regression.md",
    button: "Read More",
    label: [""],
    type: ""
  },
  {
    img: "img/mammography.png",
    title: "Classic mammography problem",
    description: "this is a description",
    link: "https://hal.inria.fr/hal-00717503v2/document",
    button: "Read More",
    label: ["icon"],
    type: "Icon Array"
  },
  {
    img: "img/dotplot.png",
    title: "Quantile dotplot to visualize uncertainty of bus arrival time",
    description: "this is a description",
    link: "https://github.com/mjskay/when-ish-is-my-bus/blob/master/quantile-dotplots.md",
    button: "Read More",
    label: ["icon", "time"],
    type: "Quantile Dot Plot"
  },
  {
    img: "img/product-plot.png",
    title: "The distribution of happiness and marital status",
    description: "this is a description",
    link: "http://vita.had.co.nz/papers/prodplots.html",
    button: "Read More",
    label: ["block"],
    type: "Product Plot"
  },
  {
    img: "img/temperature-change.png",
    title: "The cities that will be drowned by global warming",
    description: "this is a description",
    link: "https://www.theguardian.com/cities/ng-interactive/2017/nov/03/three-degree-world-cities-drowned-global-warming",
    button: "Read More",
    label: ["line", "Ensemble"],
    type: "Line Ensemble"
  },
  {
    img: "img/income-mobility.png",
    title: "Income mobility Charts for Girls, Americans and other Groups",
    description: "this is a description",
    link: "https://www.nytimes.com/interactive/2018/03/27/upshot/make-your-own-mobility-animation.html",
    button: "Read More",
    label: ["icon", "Ensemble", "Flow"],
    type: "Animation"
  },
  {
    img: "img/measles.png",
    title: "Watch how the measles outbreak spreads when kids get vaccinated – and when they don't",
    description: "this is a description",
    link: "https://www.theguardian.com/society/ng-interactive/2015/feb/05/-sp-watch-how-measles-outbreak-spreads-when-kids-get-vaccinated",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Animation"
  },
  {
    img: "img/risk-theatre.png",
    title: "How to better communicate election forecasts",
    description: "this is a description",
    link: "https://www.washingtonpost.com/news/monkey-cage/wp/2016/11/29/how-to-better-communicate-election-forecasts-in-one-simple-chart/?noredirect=on&utm_term=.a6ef7e470ef6",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Risk Theater"
  },
  {
    img: "img/pictograph.png",
    title: "A study participant's increased risk of cataracts if she chose to take tamoxifen",
    description: "this is a description",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2649664/figure/F1/",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Icon Array"
  },
  {
    img: "img/temporal-bracket-probability.png",
    title: "How France And Croatia Made It To The World Cup Final",
    description: "this is a description",
    link: "https://fivethirtyeight.com/features/how-france-and-croatia-made-it-to-the-world-cup-final-in-one-chart/",
    button: "Read More",
    label: ["block", "time"],
    type: "Temporal Bracket Probability"
  },
  {
    img: "img/hockey.png",
    title: "NHL Regular Season Predictions",
    description: "this is a description",
    link: "http://hockeyviz.com/txt/preview1819",
    button: "Read More",
    label: ["block"],
    type: "Bar Chart"
  },
  {
    img: "img/attacking-discrimination.png",
    title: "Attacking discrimination with smarter machine learning ",
    description: "this is a description",
    link: "https://research.google.com/bigpicture/attacking-discrimination-in-ml/",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Dot Plot"
  },
  {
    img: "img/seats.png",
    title: "The Battle for Congress Is Close. Here’s the State of the Race.",
    description: "this is a description",
    link: "https://www.nytimes.com/interactive/2018/10/24/us/elections/2018-battle-for-congress.html",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Icon Array"
  },
  {
    img: "img/facet-icon-array.png",
    title: "A margin table of the data set Titanic",
    description: "this is a description",
    link: "http://www.wiwi.uni-bielefeld.de/lehrbereiche/statoekoinf/comet/wolf/pw_files/SOFTWARE/pic.plot_examples.pdf",
    button: "Read More",
    label: ["icon", "Ensemble"],
    type: "Icon Array"
  },
  {
    img: "img/reproducibility-survey.png",
    title: "TweenR package for visualizing the results of our reproducibility survey",
    description: "this is a description",
    link: "https://twitter.com/babeheim/status/1063792960377053185",
    button: "Read More",
    label: ["icon","block", "Flow"],
    type: "Animation"
  }
];
var cards_in_a_row = 3;
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.chunkedData = chunk(data, cards_in_a_row);

    $scope.tag_color = {
      icon: "badge-default",
      block: "badge-primary",
      line: "badge-secondary"
    };
});
