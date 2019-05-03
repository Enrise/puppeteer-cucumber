const { When, Then } = require('cucumber');
const { getElementText } = require('../support/browser');
const { expect } = require('chai');
const scope = require('../support/scope');
const { addTodoItem, deleteTodoItem } = require('../support/todo');

When('I add a todo item with the text {string}', async function(todoText) {
  await addTodoItem(todoText);
});

When('I have a todo list with {int} item(s)', async function(numberOfItems) {
  for (var i = 1; i <= numberOfItems; i++) {
    await addTodoItem('todo item ' + i);
  }
});

When('I delete item #{int}', async function(itemNr) {
  await deleteTodoItem(itemNr);
});

Then('the list has {int} item(s)', async function(numberOfItems) {
  const page = scope.context.currentPage;
  const elements = await page.$$('.todo-list .todo');
  expect(elements.length).to.equal(numberOfItems);
});

Then('I see a todo item in the list with the text {string}', async function(
  todoText
) {
  const elementText = await getElementText('.todo .view > label');
  expect(elementText).to.equal(todoText);
});