install:
    npm ci

brain-games:
    node bin/brain-games.js
fix:
    npx prettier --write .
    npx eslint --fix .

publish:
    npm publish --dry-run

lint:
    npx eslint .


