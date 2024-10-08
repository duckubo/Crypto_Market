import React, { useState } from 'react';
// wijmo components
import { ChartElement, ChartType, Position, SelectionMode } from '@mescius/wijmo.chart';
import { FlexChart } from '@mescius/wijmo.react.chart';
import { FlexChartRangeSelector } from '@mescius/wijmo.react.chart.interaction';
// css
import './Chart.css';
const Chart = ({ dataItem }) => {
    const [axisMin, setAxisMin] = useState(null);
    const [axisMax, setAxisMax] = useState(null);
    /**
     * Gets or sets the item formatter function that allows you to customize the appearance of the chart elements.
     * @arg {Object] engine - The chart's IRenderEngine responsible for rendering elements on the chart.
     * @arg {Object] hitTestInfo - Parameter that describes the element being rendered.
     * @arg {function] hitTestInfo - Function that provides the default rendering for the item.
     */
    const handleItemFormatter = (engine, hitTestInfo, defaultFormat) => {
        const { chartElement, series, pointIndex } = hitTestInfo;
        const formatterEngine = engine;
        const tradeBinding = 'high,low,open,close';
        const binding = 'volume';
        if (pointIndex >= 0 && chartElement === ChartElement.SeriesSymbol) {
            if (series.binding === tradeBinding || series.binding === binding) {
                // get current and previous values
                const { chart } = series;
                const { items } = chart.collectionView;
                const valClose = items[pointIndex].close;
                const valOpen = items[pointIndex].open;
                // Set default width of the stroke
                formatterEngine.strokeWidth = '1px';
                if (valOpen > valClose) {
                    formatterEngine.fill = '#CB2C77';
                    formatterEngine.stroke = '#CB2C77';
                }
                else {
                    formatterEngine.stroke = '#73CA21';
                    formatterEngine.fill = series.binding === binding ? '#73CA21' : 'white';
                }
            }
        }
        defaultFormat(); // render element as usual
    };
    /**
     * Raises the rangeChanged event.
     * @arg {Object] event
     */
    const handleRangeChanged = event => {
        setAxisMax(event.max || null);
        setAxisMin(event.min || null);
    };
    return (<div className="chart">
      <FlexChart className="flex-chart" chartType={ChartType.Candlestick} selectionMode={SelectionMode.Point} itemsSource={dataItem.history} series={[{ binding: 'high,low,open,close' }]} axisX={{ position: Position.None, min: axisMin, max: axisMax, reversed: true }} legend={{ position: Position.None }} itemFormatter={handleItemFormatter}/>
      <FlexChart className="data-range" style={{ maxHeight: "40px" }} plotMargin="6 0 6 80" itemsSource={dataItem.history} series={[{ binding: 'volume' }]} axisX={{ position: Position.None }} axisY={{ position: Position.None }} legend={{ position: Position.None }} itemFormatter={handleItemFormatter}>
        <FlexChartRangeSelector rangeChanged={handleRangeChanged} initialized={handleRangeChanged}/>
      </FlexChart>
    </div>);
};
export default Chart;
