install:
	npm ci

gendiff:
	node gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm run test

test-coverage:
	npm test -- --coverage --coverageProvider=v8