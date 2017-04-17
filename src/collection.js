import some from "lodash/collection/some";
import every from "lodash/collection/every";
import isDate from "lodash/lang/isDate";

export const isNonEmptyArray = function (collection) {
  return Array.isArray(collection) && collection.length > 0;
};

export const containsStrings = function (collection) {
  return some(collection, (value) => typeof value === "string");
};

export const containsDates = function (collection) {
  return some(collection, isDate);
};

export const containsOnlyStrings = function (collection) {
  return isNonEmptyArray(collection) && every(collection, (value) => typeof value === "string");
};

export const isArrayOfArrays = function (collection) {
  return isNonEmptyArray(collection) && every(collection, Array.isArray);
};

export const removeUndefined = function (arr) {
  return arr.filter((el) => el !== undefined);
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
