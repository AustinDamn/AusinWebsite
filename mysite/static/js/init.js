/*
	Transit by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: {
				// href: 'css/style.css', original
				href: '/static/css/style.css', // injected by Eric Huang @ 20150418
				containers: 1400,
				grid: { gutters: ['2em', 0] }
			},
			xlarge: {
				media: '(max-width: 1680px)',
				// href: 'css/style-xlarge.css', original
				href: '/static/css/style-xlarge.css', // injected by Eric Huang @ 20150418
				containers: 1200
			},
			large: {
				media: '(max-width: 1280px)',
				// href: 'css/style-large.css', original
				href: '/static/css/style-large.css', // injected by Eric Huang @ 20150418
				containers: 960,
				grid: { gutters: ['1.5em', 0] },
				viewport: { scalable: false }
			},
			medium: {
				media: '(max-width: 980px)',
				// href: 'css/style-medium.css', original
				href: '/static/css/style-medium.css', // injected by Eric Huang @ 20150418
				containers: '90%!'
			},
			small: {
				media: '(max-width: 736px)',
				// href: 'css/style-small.css', original 
				href: '/static/css/style-small.css', // injected by Eric Huang @ 20150418
				containers: '90%!',
				grid: { gutters: ['1.25em', 0] }
			},
			xsmall: {
				media: '(max-width: 480px)',
				// href: '/static/css/style-xsmall.css', original 
				href: '/static/css/style-xsmall.css' // injected by Eric Huang @ 20150418
			}
		},
		plugins: {
			layers: {
				config: {
					mode: 'transform'
				},
				navButton: {
					breakpoints: 'medium',
					height: '4em',
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
					position: 'top-left',
					side: 'top',
					width: '6em'
				},
				navPanel: {
					animation: 'overlayX',
					breakpoints: 'medium',
					clickToHide: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="moveElement" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-left',
					side: 'left',
					width: 250
				}
			}
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

	});

})(jQuery);