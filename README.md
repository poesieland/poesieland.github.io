# Poesieland

This is the personal [poetry website](https://poesieland.github.io/) of Barbara Post, editable content which is used with Hugo static site generator and Hugo Theme Relearn theme.

## License

Poesieland © 2023-2025 by Barbara Post is licensed under CC BY-NC-ND 4.0. To view a copy of this license, visit [https://creativecommons.org/licenses/by-nc-nd/4.0/](https://creativecommons.org/licenses/by-nc-nd/4.0/).

## Technical dependencies

This repository uses one other repository as Git submodules:

- the Hugo Theme Relearn theme project, following main development: [https://github.com/McShelby/hugo-theme-relearn](https://github.com/McShelby/hugo-theme-relearn).

I made some styling customization: I added a border around article content, as well as a paper-tone background in light mode for better readability of black text.

I also use a great javascript charting tool: Chart.js. The theme indeed has nice integration capabilities of custom scripts (umd modules).

This repository also uses two other repositories:

- for specific content files and statistics data files generation: this website's back-office tools: [https://github.com/postb99/poesieland_back-office](https://github.com/postb99/poesieland_back-office)

The back-office repository is locally cloned next to this project in "back-office" folder and provides a standalone dotnet executable.

- for content storage in a single XML file: this website's back-office data (private project): [https://github.com/postb99/poesieland_storage](https://github.com/postb99/poesieland_storage)

This storage repository is locally cloned next to this project in "back-office-data" folder.