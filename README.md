# NewStation

This single-page app fetches news data from the NewsAPI and provides a user-friendly interface for browsing and searching for news. It uses Tailwind CSS for styling and includes features like real-time news data and detailed pop-up modals.

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To run this app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/paramsgit/newStation.git
   cd newStation
    ```
2. Install the dependencies:

    ```bash
    npm install
    ```
3. Configure the News API:


Create a .env file in the project root and add your API key:
```REACT_APP_API=your_api_key_here```
Also add endpoints to fetch data:
```REACT_APP_NEWS_HEADLINE_URL=https://newsapi.org/v2/```

4. Run the development server:

```bash
npm start
```
Open your browser and go to http://localhost:3000 to use the app.

## Features
- Real-time News Data: Fetches the latest news articles from NewsAPI.
- Search Functionality: Allows users to search for news articles based on keywords.
- Detailed Pop-up Modals: Provides detailed views of each news article in a modal.
- Responsive Design: Fully responsive layout using Tailwind CSS to ensure usability on different devices.
- Bookmarking: Users can bookmark their favorite articles for later reference.
- Dark Mode: Toggle between light and dark themes for better readability.
- Pagination: Efficiently navigates through pages of news articles.
- Loading Indicators: Visual feedback while fetching data to enhance user experience..

## Dependencies
This app relies on the following major dependencies:

- ReactJs
- Redux Toolkit
- TailwindCSS

For a complete list of dependencies, please refer to the package.json file.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please create a GitHub issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

