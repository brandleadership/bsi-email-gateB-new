const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('medium-story')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Medium Story')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('737e2544-4589-11ed-b878-0242ac120004')
            .withLabel('Medium Story Image'),
        cx.part.formattedText
            .withId('737e2404-4589-11ed-b878-0242ac120002')
            .withLabel('Medium Story Title')
            .withHtmlEditorConfig(require('../../../../formatted-text-config')),
        cx.part.link.withLabel('Medium Story Link')
    );
