const uuid = require('uuid');

module.exports = class {
  constructor({
    id = uuid(),
    title = 'title',
    order = '1',
    description = 'description',
    userId = null,
    boardId = null,
    columnId = null
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
};
