<center>
<h1>Serval website using Jekyll 💊</h1>
</center>


## How it works :monocle_face:

The website is built using [Jekyll](https://jekyllrb.com/), a very simple, blog-aware, static site generator. It allows us to create website pages using HTML and Markdown, and it's directly supported by [GitHub Pages](https://pages.github.com/).

Brief overview of the key folders and files:

| File/Folder | Description |
| --- | --- |
| [`_pages/`](_pages/) | Contains pages of the website. <br> - `index.html` is the main page <br> - `example.html` will be accessible at `serval-snt.github.io/example` |
| [`assets/`](assets/) | Contains images, CSS, and other static files. |
| [`_layouts/default.html`](_layouts/default.html) | The default layout used at every page. Also contains the navigation bar, which you can edit. |
| [`_config.yml`](_config.yml) | Jekyll website config. |
| [`Gemfile`](Gemfile) | Ruby gems needed to run it locally. |
| [`members.py`](members.py) | Python script to retrieve the list of Serval members. |


## Testing Locally :computer:

Before pushing your changes to GitHub, you might want to test the site locally.

### Prerequisites :gear:

1. Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/).  
   - Debian/Ubuntu: `sudo apt-get install ruby-full build-essential zlib1g-dev`
   - Fedora: `sudo dnf install ruby ruby-devel zlib-devel`
   - macOS: `brew install ruby`

2. Install Jekyll and bundler gems. Open your terminal and run:

```bash
gem install jekyll bundler
```

3. In this repository, run:

```bash
bundle install
```

### Run it :running:

Build the site and make it available on a local server.

```bash
bundle exec jekyll serve
```

Now browse to http://localhost:4000

:rocket: Once your changes are ready, push them to GitHub. GitHub Pages will automatically build and deploy the site.

Happy testing! :test_tube:


## Create a page :sparkles:

1. Create a new `.html` file in the root directory, or a new `.md` file in the `_pages` directory.
2. At the top of the file, add the following front matter:

```yaml
---
layout: default
title: Your Page Title
---
```

3. Below the front matter, add your page content in Markdown or HTML.  
   **Markdown example:**
   ```markdown
   # Your Page Title

   This is a **new page**.

   Here is an image:
   ![Serval](/assets/serval.jpg)
   ```

   **HTML example:**
   ```html
   <h1>Your Page Title</h1>

   <p>This is a <b>new page.</b></p>

   <img src="/assets/serval.jpg" alt="Serval">
   ```

4. Save the file, test it, push it, and enjoy your new page! :tada:
