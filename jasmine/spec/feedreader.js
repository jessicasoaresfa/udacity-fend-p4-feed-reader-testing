/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* #1: This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined and non-empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* #1.1: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url is defined and non-empty', function() {
             allFeeds.forEach(function(feed) {
                 expect(feed.url).toBeDefined();
                 expect(feed.url.length).not.toBe(0);
             });
         });

        /* #1.2: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined and non-empty', function() {
             allFeeds.forEach(function(feed) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).not.toBe(0);
             });
         });
     });


    /* #2: Write a new test suite named "The menu" */

    describe('The menu', function() {

            /* #2.1: Write a test that ensures the menu element is
             * hidden by default. You'll have to analyze the HTML and
             * the CSS to determine how we're performing the
             * hiding/showing of the menu element.
             */

            it('hidden by default', function() {
                expect($('body').hasClass('menu-hidden')).toBeTruthy();
            });

            /* #2.2: Write a test that ensures the menu changes
             * visibility when the menu icon is clicked. This test
             * should have two expectations: does the menu display when
             * clicked and does it hide when clicked again.
             */

            it('visibility when clicked', function() {

                // display when clicked
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBeFalsy();

                // hidden when clicked
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBeTruthy();
            });

        });

    /* #3: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* #3.1: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         // the feed container is not empty
         beforeEach(function(done) {
             loadFeed(0, done);
         });

         // the feed container has at least one element
         it('at least one', function(){
             expect($('.feed .entry').length).toBeGreaterThan(0);
         });
     });


    /* #4: Write a new test suite named "New Feed Selection" */

        /* #4.1: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         describe('new feed loaded', function () {
       		let initialFeed;

       		beforeEach(function (done) {
       			loadFeed(0, function () {
       				initialFeed = document.querySelector('.feed').textContent;
       				loadFeed(1, done);
       			});
       		});

       		it('content changes when reloads', function (done) {
       			const newFeed = document.querySelector(".feed").textContent;
       			expect(initialFeed).not.toEqual(newFeed);
       			done();
       		});
       	});
}());
