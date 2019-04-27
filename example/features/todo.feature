Feature: Todo

    I can manage my todo's in the app

    Scenario: Adding a todo item
        When I add a todo item with the text "Hello world"
        Then the list has 1 item
        And I see a todo item in the list with the text "Hello world"

    Scenario: Adding multiple todo items
        When I add a todo item with the text "First item"
        And I add a todo item with the text "Second item"
        Then the list has 2 items

    Scenario: Deleting a todo item
        When I have a todo list with 2 items
        And I delete the first item
        Then the list has 1 item
