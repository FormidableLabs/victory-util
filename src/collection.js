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
  return _.reduce(datasets, (memo, dataset) => {
    dataset = dataset.data || dataset;
    const localMax = (_.max(_.pluck(dataset, dependentAxis)));
    return localMax > 0 ? memo + localMax : memo;
  }, 0);
};

export const getCumulativeMin = function (datasets, dependentAxis) {
  return _.reduce(datasets, (memo, dataset) => {
    dataset = dataset.data || dataset;
    const localMin = (_.min(_.pluck(dataset, dependentAxis)));
    return localMin < 0 ? memo + localMin : memo;
  }, 0);
};
