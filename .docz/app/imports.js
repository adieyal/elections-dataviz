export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/BarChart/barchart.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-bar-chart-barchart" */ 'src/components/BarChart/barchart.mdx'),
  'src/components/BarchartWithNavMap/barchartMap.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-barchart-with-nav-map-barchart-map" */ 'src/components/BarchartWithNavMap/barchartMap.mdx'),
  'src/components/Map/map.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-map-map" */ 'src/components/Map/map.mdx'),
  'src/components/ProgVotesCountPiechart/piechart.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-prog-votes-count-piechart-piechart" */ 'src/components/ProgVotesCountPiechart/piechart.mdx'),
  'src/components/RaceForSeatBarchart/barchart.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-race-for-seat-barchart-barchart" */ 'src/components/RaceForSeatBarchart/barchart.mdx'),
  'src/components/QuickResultsWidget/quickResultsWidget.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-quick-results-widget-quick-results-widget" */ 'src/components/QuickResultsWidget/quickResultsWidget.mdx'),
  'src/components/SpoiltBarchart/barchart.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-spoilt-barchart-barchart" */ 'src/components/SpoiltBarchart/barchart.mdx'),
  'src/components/TurnoutBarchart/barchart.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-turnout-barchart-barchart" */ 'src/components/TurnoutBarchart/barchart.mdx'),
  'src/components/TurnoutMap/map.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-turnout-map-map" */ 'src/components/TurnoutMap/map.mdx'),
}