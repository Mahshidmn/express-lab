// data/todo-db.js

const students = [
    {student: 'Alex', status: true},
    {student: 'Emily', status: false},
    {student: 'Anna', status: false},
    {student: 'John', status: true}
  ];

  module.exports = {
    getAll: function() {
        return students;
    }
  };