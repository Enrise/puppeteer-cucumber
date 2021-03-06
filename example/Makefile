# ===========================
# Main commands
# ===========================

info: do-show-commands

start: do-start
stop: do-stop
kill: do-kill
test: do-start do-test
test-focus: do-start do-test-focus
update: do-update-node-modules do-show-commands

# ===========================
# Snippets
# ===========================

set-ids = USERID=$$(id -u) GROUPID=$$(id -g)

do-show-commands:
	@echo "\n=== Make commands ===\n"
	@echo "make start         Start the app container"
	@echo "make stop          Stop the app container"
	@echo "make kill          Stop the container and remove networks and containers"
	@echo "make test          Start the container and run the regression test"
	@echo "make update        Update the node modules"
	@echo ""

do-start:
	@echo "\n=== Start app ===\n"
	${set-ids} docker-compose up -d app
	@echo "\n> Your app is running on http://localhost:8080\n"

do-stop:
	@echo "\n=== Stop app ===\n"
	${set-ids} docker-compose stop

do-kill:
	@echo "\n=== Kill app ===\n"
	${set-ids} docker-compose down

do-test:
	@echo "\n=== Test ===\n"
	${set-ids} docker-compose run --rm puppeteer-cucumber

do-test-focus:
	@echo "\n=== Test ===\n"
	${set-ids} docker-compose run --rm puppeteer-cucumber --tags '@focus'

do-update-node-modules:
	@echo "\n=== Update node modules ===\n"
	${set-ids} docker-compose run --rm --entrypoint "npm install" puppeteer-cucumber
