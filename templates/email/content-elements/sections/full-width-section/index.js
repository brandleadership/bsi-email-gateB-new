const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('section-full-width')
    .withLabel('Text Container')
    .withDescription('For formatted and plain text')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('section-content-full-width')
            .withAllowedElements(
                require('../../elements/formatted-text'),
                require('../../elements/plain-text'),
                require('../../elements/spacer')
            )
    );
