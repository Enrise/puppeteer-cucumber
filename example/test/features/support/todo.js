const addTodoItem = async (todoText, page) => {
  const input = await page.$('input.new-todo');
  await input.type(todoText);
  await input.press('Enter');
};

const deleteTodoItem = async (itemNr, page) => {
  const item = (await page.$$('.todo'))[itemNr - 1];
  await item.hover();
  const deleteButton = await item.$('button.destroy');
  await deleteButton.click();
};

const getItemText = async (itemNr, page) => {
  const item = (await page.$$('.todo'))[itemNr - 1];
  return await item.$eval('label', element => element.innerText);
};

module.exports = { addTodoItem, deleteTodoItem, getItemText };
