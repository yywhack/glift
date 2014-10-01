Glift
=====

## The Go Lightweight Frontend

Glift is a modern javascript client for the game
<a href="http://en.wikipedia.org/wiki/Go_(game)">Go</a>
Glift was created to be a modern Go UI that supports mobile and desktop alike.
It was built from the beginning to support fully featured experiences viewing
games, studying go problems, and constructing Go lessons.

See [GliftGo.com](http://www.gliftgo.com) if you want to see Glift in action and
lots of code samples!

Here's a simple example, to create a game viewer for a game in div.

      glift.create({
        divId: 'myId',
        sgf: 'mysgfs/lee_sedol_vs_gu_li.sgf'
      });

The complied Glift JavaScript is completely self-contained and supports the
following browsers:

   - IE 9+
   - Chrome
   - Chrome on Android
   - Firefox
   - Safari
   - Safari on iOS

Unsupported browsers

   - IE 6-8
   - Native Android Browser

### APIs

Glift is still in beta, but it's rapidly approaching a stable 1.0 release.  All
methods and options supported for the lifetime of the 1.0 release have been
marked with @api(1.0). Options/methods that are on track to become supported
have been marked @api(beta).

The currently supported methods support @api(1.0):

   * `glift.create({options})` - Create a Glift instance.

And the following options (see src/widgets/options/base_options.js)

   * `divId` - ID of the container div.
   * `sgf` - String, url, or object, with options from sgfDefaults.
   * `sgfDefaults`
      * `sgfString` - String for the SGF. Only specified in sgf objects.
      * `url` - URL of the sgf. Only specified in sgf objects.
      * `widgetType` - The type of the Glift widget. Defaults to GAME_VIEWER.
      * `initialPosition` - Where to start initially.
      * `boardRegion` - The region of the borad to display. Defaults to AUTO.
      * `problemConditions` - The conditions for getting a problem correct.
      * `uiComponents` - UI components to use.

### Development

If you're planning on making deep changes to Glift, it may help to look [this
infrastructure
diagram](https://docs.google.com/drawings/d/1MQK8xWe7djaSJtXPffinfRcwdsA859S_uVI8YqOYKhk/edit).

Although Glift was built for all major browsers, Glift was built on OSX, so
these development docs assume a POSIX toolchain.

For depgen.py to work, you'll need to export a CLOSURE variable pointing to the
closure compiler. Ex:

   * `export CLOSURE="java -jar /path/to/closure_compiler.jar"`

To update the HTML tests for development, run:

   * `src/depgen.py`

To generate the compiled JS and update the HTML tests, run;

   * `src/depgen.py  --full`
