# Unsplash Photo Gallery App

This single-page app fetches photos from the Unsplash API and provides a user-friendly interface for browsing and searching images. It uses Tailwind CSS for styling and includes features like real-time search suggestions, debouncing for API calls, and image pop-up modals.

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
   git clone https://github.com/yourusername/unsplash-photo-gallery.git
   cd unsplash-photo-gallery
    ```
2. Install the dependencies:

    ```bash
    npm install
    ```
3. Configure the Unsplash API:

    Sign up for an Unsplash API key at https://unsplash.com/developers.
Create a .env file in the project root and add your API key:
```REACT_APP_UNSPLASH_API_KEY=your_api_key_here```

4. Run the development server:

```bash
npm start
```
Open your browser and go to http://localhost:3000 to use the app.

## Features
- Fetching Photos: The app fetches photos from the Unsplash API. The photo lists can be found in the returned JSON data.
 The main page displays a list of image thumbnails with the name of the user and the number of likes. This data comes from the Unsplash List Photos API.

- Real-Time Search : You can search for photos using the Unsplash search API. There is a search bar at the top of the page for this purpose.
Typing anything in the search bar updates the page view with the image search results in real-time.

- Image Pop-Up Modals: Clicking on any photo in the list displays the actual image in a pop-up modal. The modal includes details such as user information, likes count, user's social links, and other relevant data from the API.

- Search Suggestions: The search bar provides real-time suggestions that come from Google's API.

- Debouncing: Debouncing is implemented to prevent excessive API calls when typing in the search bar.

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

