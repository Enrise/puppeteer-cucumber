Feature: Todo

    I can manage my todo's in the app

    Scenario: Adding a todo item
        Given I open the url "http://todo-app.com/"
        When I add a todo item with the text "Hello world"
        Then the list has 1 item
        And I expect the element ".todo .view > label" contains text "Hello world"

    Scenario: Adding multiple todo items
        Given I open the url "http://todo-app.com/"
        When I add a todo item with the text "First item"
        And I add a todo item with the text "Second item"
        Then the list has 2 items
        And I take a screenshot "2-items"

    Scenario: Deleting a todo item
        Given I open the url "http://todo-app.com/"
        Given I have a todo list with 2 items
        Then I take a screenshot "before-delete"
        When I delete item #1
        Then the list has 1 item
        And I take a screenshot "after-delete"
