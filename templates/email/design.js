require("./styles/styles.scss");

const { cx, Locale } = require("@bsi-cx/design-build");

module.exports = cx.design
  .withTitle("E-Mail Scaffold")
  .withAuthor("BSI Business Systems Integration AG")
  .withDate("20.05.2022")
  .withPreviewImage(require("./thumbnail.png"))
  .withDefaultLocale(Locale.EN)
  .withLocales(Locale.EN, Locale.DE)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId("sections")
      .withLabel("Sections")
      .withContentElements(
        // require("./content-elements/sections/brand-leadership"),
        // require("./content-elements/sections/cta-full-width"),
        require("./content-elements/sections/date-header"),
        require("./content-elements/sections/footer"),
        // require("./content-elements/sections/gradient-block-header"),
        // require("./content-elements/sections/gradient-header"),
        // require("./content-elements/sections/header"),
        // require("./content-elements/sections/large-event-full-width"),
        // require("./content-elements/sections/large-story-full-width"),
        // require("./content-elements/sections/main-event-full-width"),
        // require("./content-elements/sections/main-story-full-width"),
        // require("./content-elements/sections/medium-event"),
        // require("./content-elements/sections/medium-story"),
        // require("./content-elements/sections/small-event"),
        // require("./content-elements/sections/small-story"),
        require("./content-elements/sections/teaser-full-width")
      ),
    // cx.contentElementGroup
    //   .withGroupId("elements")
    //   .withLabel("Elements")
    //   .withContentElements(
    //     // require("./content-elements/elements/h1"),
    //     // require("./content-elements/elements/h3"),
    //     require("./content-elements/elements/plain-text")
    //     // require("./content-elements/elements/formatted-text")
    //   ),
    cx.contentElementGroup
      .withGroupId("content")
      .withLabel("Content")
      .withContentElements(
        require("./content-elements/content/text"),
        require("./content-elements/content/title")
      )
  )
  .withDropzones(
    cx.dropzone.withDropzone("main").withAllowedElements(
      require("./content-elements/sections/date-header"),
      // require("./content-elements/sections/cta-full-width"),
      // require("./content-elements/sections/large-event-full-width"),
      // require("./content-elements/sections/large-story-full-width"),
      // require("./content-elements/sections/main-event-full-width"),
      // require("./content-elements/sections/main-story-full-width"),
      // require("./content-elements/sections/medium-event"),
      // require("./content-elements/sections/medium-story"),
      // require("./content-elements/sections/small-event"),
      // require("./content-elements/sections/small-story"),
      require("./content-elements/sections/teaser-full-width")
    ),

    cx.dropzone
      .withDropzone("header")
      .withAllowedElements(require("./content-elements/sections/date-header")),
    // require("./content-elements/sections/gradient-block-header"),
    // require("./content-elements/sections/gradient-header"),
    // require("./content-elements/sections/header")
    cx.dropzone.withDropzone("footer").withAllowedElements(
      // require("./content-elements/sections/brand-leadership"),
      require("./content-elements/sections/footer")
    )
  );
