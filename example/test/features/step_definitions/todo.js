const { When, Then } = require('cucumber');
const { expect } = require('chai');
const { addTodoItem, deleteTodoItem } = require('../support/todo');

When('I add a todo item with the text {string}', async function(todoText) {
  await addTodoItem(todoText, this.page);
});

When('I have a todo list with {int} item(s)', async function(numberOfItems) {
  for (var i = 1; i <= numberOfItems; i++) {
    await addTodoItem('todo item ' + i, this.page);
  }
});

When('I delete item #{int}', async function(itemNr) {
  await deleteTodoItem(itemNr, this.page);
});

Then('the list has {int} item(s)', async function(numberOfItems) {
  const elements = await this.page.$$('.todo-list .todo');
  expect(elements.length).to.equal(numberOfItems);
});
