import type { RangeColors } from '../../../src/common/interface/theme';
import {
  getBulletRangeColor,
  transformRatioToPercent,
  scale,
} from '@/utils/g-mini-charts';
import { MiniChartTypes, type S2CellType } from '@/common';

describe('MiniCharts Utils Tests', () => {
  const padding = {
    left: 8,
    right: 8,
    top: 4,
    bottom: 4,
  };

  const cell = {
    getMeta: () => {
      return {
        x: 0,
        y: 0,
        height: 108,
        width: 208,
      };
    },
    getStyle: () => {
      return {
        cell: {
          padding,
        },
        miniChart: {
          bar: {
            intervalPadding: 4,
          },
        },
      };
    },
  };

  test('should get right points of line', () => {
    const chartData = {
      type: MiniChartTypes.Line,
      data: [
        { year: '2018', value: 10 },
        { year: '2019', value: 0 },
        { year: '2020', value: -10 },
        { year: '2021', value: 0 },
      ],
      encode: {
        x: 'year',
        y: 'value',
      },
    };

    expect(scale(chartData, cell as S2CellType)).toEqual({
      points: [
        [8, 4],
        [72, 54],
        [136, 104],
        [200, 54],
      ],
      box: [],
    });
  });

  test('should get right points of line when all values are more then 0', () => {
    const chartData = {
      type: MiniChartTypes.Line,
      data: [
        { year: '2018', value: 10 },
        { year: '2019', value: 5 },
        { year: '2020', value: 5 },
        { year: '2021', value: 5 },
      ],
      encode: {
        x: 'year',
        y: 'value',
      },
    };

    expect(scale(chartData, cell as S2CellType)).toEqual({
      points: [
        [8, 4],
        [72, 104],
        [136, 104],
        [200, 104],
      ],
      box: [],
    });
  });

  test('should get right points of line when all values are less then 0', () => {
    const chartData = {
      type: MiniChartTypes.Line,
      data: [
        { year: '2018', value: -5 },
        { year: '2019', value: -10 },
        { year: '2020', value: -5 },
        { year: '2021', value: -10 },
      ],
      encode: {
        x: 'year',
        y: 'value',
      },
    };

    expect(scale(chartData, cell as S2CellType)).toEqual({
      points: [
        [8, 4],
        [72, 104],
        [136, 4],
        [200, 104],
      ],
      box: [],
    });
  });

  test('should get right points of line when all values are equal to each other', () => {
    const chartData = {
      type: MiniChartTypes.Line,
      data: [
        { year: '2018', value: 0 },
        { year: '2019', value: 0 },
        { year: '2020', value: 0 },
        { year: '2021', value: 0 },
      ],
      encode: {
        x: 'year',
        y: 'value',
      },
    };

    expect(scale(chartData, cell as S2CellType)).toEqual({
      points: [
        [8, 104],
        [72, 104],
        [136, 104],
        [200, 104],
      ],
      box: [],
    });
  });

  test('should get right scale of bar', () => {
    const chartData = {
      type: MiniChartTypes.Bar,
      data: [
        { year: '2018', value: 10 },
        { year: '2019', value: 0 },
        { year: '2020', value: -10 },
        { year: '2021', value: 0 },
      ],
      encode: {
        x: 'year',
        y: 'value',
      },
    };

    expect(scale(chartData, cell as S2CellType)).toEqual({
      box: [
        [45, 50],
        [45, 0],
        [45, 50],
        [45, 0],
      ],
      points: [
        [8, 4],
        [57, 54],
        [106, 54],
        [155, 54],
      ],
    });
  });

  test('should get right scale of bar when all values are less then 0', () => {
    const chartData = {
      type: MiniChartTypes.Bar,
      data: [
        { year: '2018', value: -5 },
        { year: '2019', value: -10 },
        { year: '2020', value: -5 },
        { year: '2021', value: -10 },
      ],
      encode: {
        x: 'year',
        y: 'value',
      },
    };

    expect(scale(chartData, cell as S2CellType)).toEqual({
      box: [
        [45, 50],
        [45, 100],
        [45, 50],
        [45, 100],
      ],

      points: [
        [8, 4],
        [57, 4],
        [106, 4],
        [155, 4],
      ],
    });
  });

  test('should get right points of bar when all values are equal to each other', () => {
    const chartData = {
      type: MiniChartTypes.Bar,
      data: [
        { year: '2018', value: 10 },
        { year: '2019', value: 10 },
        { year: '2020', value: 10 },
        { year: '2021', value: 10 },
      ],
      encode: {
        x: 'year',
        y: 'value',
      },
    };

    expect(scale(chartData, cell as S2CellType)).toEqual({
      box: [
        [45, 100],
        [45, 100],
        [45, 100],
        [45, 100],
      ],
      points: [
        [8, 104],
        [57, 104],
        [106, 104],
        [155, 104],
      ],
    });
  });

  test('should get bullet range color', () => {
    const rangeColors: RangeColors = {
      good: 'green',
      satisfactory: 'yellow',
      bad: 'red',
    };

    expect(getBulletRangeColor(0.2, 0.2, rangeColors)).toEqual('green');
    expect(getBulletRangeColor(0.3, 0.5, rangeColors)).toEqual('yellow');
    expect(getBulletRangeColor(0.1, 0.9, rangeColors)).toEqual('red');
  });

  test('should transform ratio to percent', () => {
    expect(transformRatioToPercent(0.2)).toEqual('20%');
    expect(transformRatioToPercent('0.2')).toEqual('20%');
    expect(transformRatioToPercent('test')).toEqual('test');
    expect(transformRatioToPercent(0.02)).toEqual('2%');
    expect(transformRatioToPercent(0.02, 2)).toEqual('2.00%');
  });
});
