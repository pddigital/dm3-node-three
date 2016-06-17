angular.module( `nodeThree`, [ `ui.router` ] )

.config( function( $stateProvider, $urlRouterProvider ) {
	$stateProvider
		.state( `home`, {
			url: `/`,
			templateUrl: `src/home/home.html`,
			controller: 'homeCtrl'
		} )
		.state( `profile`, {
			url: `/profile`,
			templateUrl: `src/profile/profile.html`
		} );

	$urlRouterProvider.otherwise( `/` );
})
.constant(`url`, {
		baseUrl: `http://localhost:8081`
})
