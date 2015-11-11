import _ from "lodash";

export const containsStrings = function (collection) {
  return _.some(collection, (item) => {
    return _.isString(item);
  });
};

export const containsOnlyStrings = function (collection) {
  return _.every(collection, (item) => {
    return _.isString(item);
  });
};


export const getCumulativeMax = function (datasets, dependentAxis) {
  const barHeights = [];
  _.forEach(datasets, (dataset) => {
    dataset = dataset.data || dataset;
    barHeights.push(_.reduce(dataset, (memo, datum) => {
      const height = datum[dependentAxis];
      return height > 0 ? memo + height : memo;
    }, 0));
  });
  return _.max(barHeights);
};

export const getCumulativeMin = function (datasets, dependentAxis) {
  const barHeights = [];
  _.forEach(datasets, (dataset) => {
    dataset = dataset.data || dataset;
    barHeights.push(_.reduce(dataset, (memo, datum) => {
      const height = datum[dependentAxis];
      return height < 0 ? memo + height : memo;
    }, 0));
  });
  return _.min(barHeights);
};
