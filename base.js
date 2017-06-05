/**
 * B@SE patterns
 *
 * @author Phil Connah
 */
Rainbow.extend('base', [
	{
		// Opening/Closing function tags
        matches: {
            1: 'support.tag.open',
            2: 'support.tag.close'
        },
        pattern: /(\[&percnt;)|(\/?\??&percnt;])/g
    },
	{
		// First word in function
        matches: {
            1: 'support.tag',
            2: 'support.tag.special',
            3: 'support.tag-name'
        },
        pattern: /(\[&percnt;\??)(\/|\!?)(\w+)/g
    },
	{
		// Functions attributes keys
        matches: {
            1: 'support.attribute.key'
        },
        pattern: /([a-z_]+)(?:\:)/gi
    },
	{
		// Functions attributes values
        matches: {
            1: 'support.operator',
            2: 'string.quote',
            3: 'string.value',
            4: 'string.quote'
        },
        pattern: /(:)(\&#39;|")(.*?)(\2)/g
    },
	{
		// Opening/Closing data tags
        matches: {
            1: 'support.tag.open',
            2: 'support.tag.close'
        },
        pattern: /(\[&#64;)|(\/?\??&#64;])/g
    },
	{
		// Data tag
        name: 'support.tag',
        matches: {
            1: 'support.tag',
            2: 'support.tag.special',
			3: 'support.tag.special',
            4: 'support.tag-name'
        },
        pattern: /(\[&#64;\??)(\/|\!?)(\w+)(&#64;\])/g
    }
]);

Rainbow.addAlias('neto', 'base');
Rainbow.onHighlight(function(block, language) {
    console.log(block, 'for language', language, 'was highlighted');
});
