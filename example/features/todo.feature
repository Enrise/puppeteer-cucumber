Feature: Todo

    I can manage my todo's in the app

    Scenario: Adding a todo item
        When I add a todo item with the text "Hello world"
        Then the list has 1 item
        And I see a todo item in the list with the text "Hello world"
        And I take a screenshot with the filename "1-item.jpg"

    Scenario: Adding multiple todo items
        When I add a todo item with the text "First item"
        And I add a todo item with the text "Second item"
        Then the list has 2 items
        And I take a screenshot with the filename "2-items.jpg"

    Scenario: Deleting a todo item
        Given I have a todo list with 2 items
        Then I take a screenshot with the filename "before-delete.jpg"
        When I delete item #1
        Then the list has 1 item
        And I take a screenshot with the filename "after-delete.jpg"
