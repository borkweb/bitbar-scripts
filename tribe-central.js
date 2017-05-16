#!/usr/bin/env /usr/local/bin/node
/* jshint esversion: 6, loopfunc: true */

/*
<bitbar.title>Tribe Central</bitbar.title>
<bitbar.version>v1.0.0</bitbar.version>
<bitbar.author>Matthew Batchelder</bitbar.author>
<bitbar.author.github>borkweb</bitbar.author.github>
<bitbar.desc></bitbar.desc>
<bitbar.image></bitbar.image>
<bitbar.dependencies>node, npm, npm/fs, npm/home-config, npm/googleapis, npm/google-auth-library, npm/http, npm/moment, npm/open</bitbar.dependencies>
<bitbar.abouturl></bitbar.abouturl>
*/
var ver = '1.0.0';

if ( process.env.BitBar ) {
	var icon = 'iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9WiTo4AAAABnRSTlMAT72/wcNFk5JmAAAAAWJLR0QHFmGI6wAAAD9JREFUCNdjYMAOzNIgQIGBAcpKSwAyIZJsICYbBKIxkRQgaUNiioEVwRVAmWIQU2CiUCaaWogJYVCmAwMhAADe4SPxRecIYgAAAABJRU5ErkJggg==';

	console.log(`| dropdown=false templateImage=${icon}`);
	console.log('---');
}

var sections = {
	repos: {
		'name': 'Repos',
		'nested': true,
		'items': [
			{
				'name': 'Common',
			},
			{
				'url': 'https://github.com/moderntribe/tribe-common',
				'name': 'Tribe Common',
			},
			{
				'url': 'https://github.com/moderntribe/advanced-post-manager',
				'name': 'Advanced Post Manager',
			},
			{
				'name': 'The Events Calendar',
			},
			{
				'url': 'https://github.com/moderntribe/the-events-calendar',
				'name': 'TEC',
			},
			{
				'url': 'https://github.com/moderntribe/events-community',
				'name': 'Community',
			},
			{
				'url': 'https://github.com/moderntribe/events-community-tickets',
				'name': 'Community Tickets',
			},
			{
				'url': 'https://github.com/moderntribe/events-eventbrite',
				'name': 'Eventbrite',
			},
			{
				'url': 'https://github.com/moderntribe/events-filterbar',
				'name': 'Filterbar',
			},
			{
				'url': 'https://github.com/moderntribe/events-pro',
				'name': 'PRO',
			},
			{
				'name': 'Event Tickets',
			},
			{
				'url': 'https://github.com/moderntribe/event-tickets',
				'name': 'Event Tickets',
			},
			{
				'url': 'https://github.com/moderntribe/event-tickets-plus',
				'name': 'Event Tickets Plus',
			},
			{
				'name': 'Image Widget',
			},
			{
				'url': 'https://github.com/moderntribe/image-widget',
				'name': 'Image Widget',
			},
			{
				'url': 'https://github.com/moderntribe/image-widget-plus',
				'name': 'Image Widget Plus',
			},
			{
				'name': 'Sites',
			},
			{
				'url': 'https://github.com/moderntribe/eventscalendarpro.com',
				'name': 'TEC.com',
			},
			{
				'url': 'https://github.com/moderntribe/calendar-saas',
				'name': 'Calendar SaaS',
			},
			{
				'url': 'https://github.com/moderntribe/event-aggregator-site',
				'name': 'Event Aggregator',
			},
			{
				'url': 'https://github.com/moderntribe/pue-service',
				'name': 'PUE',
			},
			{
				'name': 'Misc',
			},
			{
				'url': 'https://github.com/moderntribe/TribalScents',
				'name': 'CodeSniffer: Tribal Scents',
			},
			{
				'url': 'https://github.com/moderntribe/tr1b0t',
				'name': 'Hubot: tr1b0t',
			},
			{
				'url': 'https://github.com/moderntribe/tribe-jenkins-scripts',
				'name': 'Jenkins Scripts',
			},
			{
				'url': 'https://github.com/moderntribe/product-taskmaster',
				'name': 'Product Taskmaster',
			},
			{
				'url': 'https://github.com/moderntribe/tribe-product-utils',
				'name': 'Product Utils',
			},
			{
				'url': 'https://github.com/borkweb/bitbar-scripts',
				'name': 'Scripts: BitBar',
			},
			{
				'url': 'https://github.com/borkweb/tampermonkey-scripts',
				'name': 'Scripts: Tampermonkey',
			},
		],
	},
	scrums: {
		'name': 'Scrums',
		'nested': false,
		items: [
			{
				'id': 77018,
				'name': 'Dev',
			},
			{
				'id': 77844,
				'name': 'Leadership Weekly',
			},
			{
				'id': 77018,
				'name': 'Plugins',
			},
			{
				'id': 74444,
				'name': 'SaaS',
			},
			{
				'id': 77977,
				'name': 'TEC.com Sprint 20',
			},
		],
	},
	code_reviews: {
		'name': 'Code Reviews',
		'nested': false,
		'items': [
			{
				'id': 77556,
				'name': 'Plugins',
			},
		],
	},
	queries: {
		'name': 'Queries',
		'nested': false,
		'items': [
			{
				'url': 'http://m.tri.be/mytix',
				'name': 'My Tickets This Week',
			},
			{
				'url': 'http://m.tri.be/products-this-week',
				'name': 'Products This Week',
			},
			{
				'url': 'http://m.tri.be/products-next-week',
				'name': 'Products Next Week',
			},
		],
	},
	extras: {
		'name': 'Data',
		'nested': false,
		'items': [
			{
				'url': 'https://central.tri.be/time_entries/report?criterias%5B%5D=member&period_type=2&from=2017-01-01&to=&columns=week&criterias%5B%5D=',
				'name': 'Weekly Hours',
			},
			{
				'url': 'https://central.tri.be/time_entries/report?criterias%5B%5D=member&period_type=1&period=current_month&columns=week&criterias%5B%5D=issue',
				'name': 'Monthly Tickets',
			},
			{
				'url': 'http://bit.ly/2rmYRpk',
				'name': 'Pull Requests',
			},
		],
	},
};


if ( process.env.BitBar ) {
	var section = null;
	var prefix = null;

	for ( var key in sections ) {
		if ( ! sections.hasOwnProperty( key ) ) {
			continue;
		}

		section = sections[ key ];

		prefix = section.nested ? '--' : '';

		console.log( '---' );
		console.log( section.name );

		section.items.forEach( function( item ) {
			if ( 'undefined' !== typeof item.url ) {
				console.log( prefix + item.name + ' | href=' + item.url );
			} else if ( 'undefined' !== typeof item.id ) {
				console.log( prefix + item.name + ' | href=https://central.tri.be/issues/' + item.id );
				console.log( prefix + item.name + ' ⬅ | alternate=true href=https://central.tri.be/issues/' + item.id + '/time_entries/new' );
			} else {
				console.log( prefix + '---' );
				console.log( prefix + item.name );
			}
		} );
	}

	console.log('---');
	console.log('Refresh | refresh=true terminal=false');
}

