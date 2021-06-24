const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(iterable, callback) {
      for (const index in iterable){
        callback(iterable[index]);
      }
      return iterable;
    },

    map: function(iterable, callback) {
      let result = [];
      //let count = 0;
      for (const index in iterable){
        result.push(callback(iterable[index]));
      }
      return result;
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
