# Groupon Interview Micro-Project: "goMove" .

# Project Overview:

# "The goal was to create a module which displayed data from an API hosted by data.gov.ie which provides real-time information for public transport services in the greater Dublin area. I chose to concentrate on the test API provided for stop 184 and created a fictional application called 'goMove' which attempts to provide Dublin public transport users with real-time information regarding their service. The micro-project's goal was to achieve the following: To show use of AngularJS, CSS, and UX/IX Design/Development capabilities."

The following project log is broken down day-by-day with brief overviews as to events as they occurred in chronological order.

# Friday, 22nd September 2017.

	- Recieved project specifications from Darren Redmond.
	- Successful creation of Angular application 'busApp' was created.
	- Successful pull of JSON format API from data.gov.ie
		- Note: The method I was originally using to pull this data had been depreciated from Angular version 1.4 and would not work. I then had to investigate the newer method of pulling an API via modern methods.
	- Successful conversion of JSON data from nested array to useable data inside Angular App.
		- Note: I had to figure out how to express a nested JSON array correctly in the view using for.Each, I did so successfully.
	- Successful creation of helper function which allows for styling of output based on remaining time.
		- Note: I had "fun" trying to figure out how to change the output color of the remaining time until the busses arrived. It took some time but I eventually assembled a helper function which outputs the data using ng-class.
	- Finished modifying Angular App for the day.


# Saturday, 23rd September 2017.

	- Began work on general styling, and creation of view layer aesthetic.
	- Created 'goMove' logo using Photoshop.
	- Built CSS framework used to style the view. 
	- Cross-browser testing.
		- Desktop Browser testing results:
			Google Chrome (current ver): Testing OK.
			Mozilla Firefox (current ver): Testing Failed.
			- CSS failure to align logo DIV (RESOLVED).
			Opera Browser (current ver): Testing OK.
			Microsoft Internet Explorer (current ver): Testing Failed.
			- Minor rendering issue on Logo due to anti-aliasing engine (UNRESOLVED).
			Apple Safari (current ver): Testing OK.
		- Mobile Browser testing results:
			Google Chrome (current ver): Testing OK.
			Mozilla Firefox (current ver): Testing OK.
			Opera Browser (current ver): Testing OK.
			Dolphin Browser (current ver): Testing OK.


# Sunday, 24th September 2017.

	- Began work on primary UI element (Navbar).
	- Tweaks to styling, colour elements, font-elements.
	- SCSS -> CSS conversion complete.
	- Cross-browser testing.
		- Desktop Browser testing results:
			Google Chrome (current ver): Testing OK.
			Mozilla Firefox (current ver): Testing OK
			Opera Browser (current ver): Testing OK.
			Microsoft Internet Explorer (current ver): Testing Failed.
			- Minor rendering issue on Logo due to anti-aliasing engine (UNRESOLVED).
			Apple Safari (current ver): Testing OK.
		- Mobile Browser testing results:
			Google Chrome (current ver): Testing OK.
			Mozilla Firefox (current ver): Testing OK.
			Opera Browser (current ver): Testing OK.
			Dolphin Browser (current ver): Testing OK.

# Outstanding To-Dos.

	- Make use of directives by placing busController's view data into a directive.
	- Make use of ngRoute module and create additional pages.
	- Resolve outstanding minor rendering issue in IE11.

# Technologies used:

	- Angular JS
	- JavaScript
	- HTML
	- CSS/SCSS
	- Photoshop
	- Microsoft Visual Studio Code


# Project deployment status:

	- Completed for review.


// Fin.





