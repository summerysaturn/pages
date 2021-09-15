<!-- PROJECT LOGO -->
<br />
<p align="center">
<!--
  <a href="https://github.com/lilykiwi/y1-csg-uni">
    <img src=".github/uni.png" alt="Logo" width="160" height="160">
  </a>
  -->

  <h2 align="center">lilykiwi.github.io</h2>

  <p align="center">
    <a href="https://lilykiwi.github.io/"><strong>View the live site »</strong></a>
  </p>
</p>
<br />

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- Usage -->

## Usage

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

```shell
npm run build
```

This command builds from the `/src` folder into the `/public` folder, running
`build-css` and copying the necessary files for a live environment. This relies
on `build-css`

```shell
npm run build-css
```

This command builds the sass from the `/src/scss` folder, compiling into
`/public/css/main.css`. This utilises the node packages `sass`, `bootstrap`, and
`bootstrap-icons`.

```shell
npm run watch
```

This command builds the repository and signals the livereload script to refresh
the page every time there's a change in the `/src` folder. This is useful for
development and debug, as it constantly reloads the page whenever there are
changes. This works by running the `build` command with some extra
functionality. This utilises `nodemon`, `livereload`, and the `build` and
`build-css` scripts.

This repo uses GitHub CI to build the project and publish it to GitHub Pages.
See `/.github/workflows/publish.yml` for the workflow utilised.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<!-- CONTACT -->

## Contact

Lily Hayes | [@lilykiwi\_](https://twitter.com/lilykiwi_) | [lilykiwi9911@pm.me]

Project Link: [https://github.com/lilykiwi/lilykiwi.github.io](https://github.com/lilykiwi/lilykiwi.github.io)
