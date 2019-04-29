# ===========================
# Main commands
# ===========================

info: do-show-commands

start: do-start
stop: do-stop
kill: do-kill
test: do-start do-test

# ===========================
# Snippets
# ===========================

do-show-commands:
	@echo "\n=== Make commands ===\n"
	@echo "make start         Start the app container"
	@echo "make stop          Stop the app container"
	@echo "make kill          Stop the container and remove networks and containers"
	@echo "make test          Start the container and run the regression test"
	@echo ""

do-start:
	@echo "\n=== Start app ===\n"
	docker-compose up -d app
	@echo "\n> Your app is running on http://localhost:8080\n"

do-stop:
	@echo "\n=== Stop app ===\n"
	docker-compose stop

do-kill:
	@echo "\n=== Kill app ===\n"
	docker-compose down

do-test:
	@echo "\n=== Test ===\n"
	docker-compose run puppeteer-cucumber
