/**
 * Problem in my-app structure : adding a new page is painful and error prone for the whole game
 * Code duplication among pages 
 * 
 * How to solve : use of a generic game-page component
 * The game page component provide template for activity/presentation, and for informing the game 
 * engine of the completion of activity (allowing swipe)
 * The state of a page at a given time is consistent with an activity JS object, for generic purpose
 * this object will be defined as an instance of ECMA6 class, with default values
 * 
 * Routing issue: the current pattern is based on named activity route matching web component
 * The current route should stay consistent with the view : #guidance matching the map view
 * Solution keeping genericity : the activity JS object contains a name field which match the routePath, 
 * the change route event listenner : triggers selection of the maching routePath in <swippeable-page></swippeable-page>
 *  
 * 
 */


 