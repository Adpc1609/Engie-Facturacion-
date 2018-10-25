/* //funcionalidad del Menú lateral
function toggleMenu() {
	if (sideMenu.className.indexOf("menu_closed") >= 0) { 
	  openMenu(); 
	} else {
	  closeMenu(); 
	}
  }
  
  function openMenu() {
	sideMenu.classList.remove('menu_closed'); 
	sideMenu.classList.add('menu_open');
  }
  
  function closeMenu() {
	sideMenu.classList.add('menu_closed'); 
	sideMenu.classList.remove('menu_open');
	} */

 /*navbar*/
 //funcionalidad del Menú lateral/* Set the width of the side navigation to 250px */
 //funcionalidad del Menú lateral/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
$('#datepicker').datepicker({
	uiLibrary: 'bootstrap4'
});
