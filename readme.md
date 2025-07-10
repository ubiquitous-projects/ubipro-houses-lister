# UbiPro Houses Lister

An Express based app for leveraging the Notion API to fetch and display
scheduled YouTube videos.

Find and list houses for sale or for rent. This is a React / Firebase v9 project
from the React Front To Back 2022 course.

The listings use Google geocoding to get the coords from the address field. You
need to either rename .env.example to .env and add your Google Geocode API key
OR in the **CreateListing.jsx** file you can set **geolocationEnabled** to
"false" and it will add a lat/lng field to the form.

## Usage

```sh
# for setup
npm install

# for development
npm run dev
```

## Commands

```sh
# No commands available
```

### Versions

-   1.0.0 (latest)

### Authors

-   [Michael K Macharia](https://www.github.com/michaelkmacharia)

### Licenses

-   AGPL Version 3
