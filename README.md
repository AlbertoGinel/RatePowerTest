# Project Readme

## Architecture and Technical Decisions

From the available features, I decided to go with the standard REST API and Zustand, and I also opted to install the React DOM router. My strategy involves requesting the page as needed; whenever I require information about a specific planet, I make an API call using its ID. Each favorite and every Planet Info triggers a new API request. I placed trust in this approach based on my recent experience with an app in Sveltekit relying on the API, but it turned out to be a poor decision.

While it initially seemed like a wise choice for future page scalability, I've become wary of relying too heavily on the server. I regret choosing this path. If I were to start over, I would gather information in Zustand to avoid making redundant API calls.

As the API call for the table of planets requires multiple page calls, the table is growing over time.

### Work Sequence:

- Defining the routes making the pages.
- Setting Zustand, make Store.
- Fetching of the table, managing pagination.
- Allowing the planets to be selected by the stars saving in Zustand.
- Favorite Planets Cards, mapped from Zustand.
- Warning window for removing FavCards, connecting with Planet Cards and Favorites.
- Info Planet Screen when the name of the planet is clicked.

### Testing Strategy

I'm afraid I had no time to code any tests, the testing strategy is just manual.

### Alternatives, how would you have improved your work?

- A complete different approach when requesting information, saving the list of Planets in Zustand, and use it from there.
- I should have done tests and put some order in the styling.
