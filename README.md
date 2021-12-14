<p align="center">
   <img src=".github/landing-page.jpg" alt="Happy" width="100%"/>
</p>

# :page_with_curl: Table of Contents

* [About](#information_source-about)
* [Technologies](#computer-technologies)
* [Features](#rocket-features)
* [How to run](#seedling-how-to-run)
* [License](#pencil-license)

# :information_source: About

Happy is a platform to facilitate the search for nearby orphanages and obtain informations about the orphanage, visiting hours, instructions for visiting, among other things. The application has the Web and Mobile versions and was developed during the Next Level Week 3.0 event provided by the Rocketseat instituiton.

# :computer: Technologies

### 📦 API

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

### :computer: Web

- [React.js](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Leaflet](https://leafletjs.com/)
- [Mapbox](https://www.mapbox.com/)

### :iphone: Mobile

- [React Native](https://reactnative.dev/)

# :rocket: Features
  
  - Registration of orphanages
  - View nearby orphanages on the map
  - View the route to the orphanage on the map

# :seedling: How to run

```bash
# Clone Repository
$ git clone https://github.com/lucas-almeida-silva/happy.git
```

### 📦 Run API

```bash
# Go to server folder
$ cd happy/server

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```
Access API at http://localhost:3333/

### :computer: Run Web Project

```bash
# Go to web folder
$ cd happy/web

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```

Access the application at http://localhost:3000/

You need to create a account on the [Mapbox](https://www.mapbox.com/) and obtain the access token. After that, you need do put this key in the .env file at the root of the project.

If you prefer, you can just uncomment this line below in the OrphanagesMap.tsx file to use another map option.
```JSX
{* <TileLayer url ="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> *}
```

You can also change latitude and longitude to match your location. To do this, just visit the [Google Maps](maps.google.com) and copy the latitude and longitude of the URL, as in the example below:

https://www.google.com/maps/@-23.64201,-46.6029906,15z

In this case, the latitude is -23.64201 and the longitude is -46.6029906.

Then, replace the latititude and longitude on the center property of the Map component in the OrphanagesMap.tsx file.


### :iphone: Run Mobile Project

```bash
# Go to web folder
$ cd happy/mobile

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```

# :pencil: License

This project is under the [MIT license](LICENSE).
