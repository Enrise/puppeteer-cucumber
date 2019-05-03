var scope = require('./scope');
const { get } = require('./browser');

const addTodoItem = async todoText => {
  const page = scope.context.currentPage;
  const input = await page.$('input.new-todo');
  await input.type(todoText);
  await input.press('Enter');
};

const deleteTodoItem = async itemNr => {
  const page = scope.context.currentPage;
  const item = (await page.$$('.todo'))[itemNr - 1];
  await item.hover();
  const deleteButton = await item.$('button.destroy');
  await deleteButton.click();
};

const getItemText = async itemNr => {
  const page = scope.context.currentPage;
  const item = (await page.$$('.todo'))[itemNr - 1];
  return await item.$eval('label', element => element.innerText);
};

module.exports = { addTodoItem, deleteTodoItem, getItemText };
