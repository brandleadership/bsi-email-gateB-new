const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('text-main')
    .withIcon(Icon.TEXT)
    .withLabel('Plain Text')
    .withFile(require('./template.twig'))
    .withParts(cx.part.plainText.withLabel('Plain Text'));
