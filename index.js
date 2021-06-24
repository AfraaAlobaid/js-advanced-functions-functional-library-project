const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (iterable, callback) {
      for (const index in iterable) {
        callback(iterable[index]);
      }
      return iterable;
    },

    map: function (iterable, callback) {
      let result = [];
      for (const index in iterable) {
        result.push(callback(iterable[index]));
      }
      return result;
    },

    reduce: function (collection, callback, acc) {
      let i;
      if (acc === undefined) {
        acc = collection[0];
        i = 1;
      } else {
        i = 0;
        acc = acc;
      }
      for (i; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function (collection, predicate){
      for (const index in collection){
        if (predicate(collection[index]))
          return collection[index];
      }
      return undefined;
    },

    filter: function (collection, predicate){
      let result = [];
      for (const index in collection){
        if (predicate(collection[index]))
          result.push(collection[index]);
      }
      return result;
    },

    size: function(collection){
      let count = 0;
      for (const index in collection){
        count++;
      }
      return count;
    },

    functions: function () {},
  };
})();

fi.libraryMethod();

