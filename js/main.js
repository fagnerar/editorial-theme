(function () {

// MEDIA QUERIES --------------------------------
// ----------------------------------------------

/*
    desktop:        80em        1280px
    tab-land:       61.25em     980px
    tab-port-sm:    48.3125em   773px
    tab-port:       46em        736px
    phone:          30em        480px
    phone-sm:       22.5em      360px
*/
var media = {
    desktop: window.matchMedia('only screen and (max-width: 80em)')
};

//execute one time
mediaDesktopHandler(media.desktop);

media.desktop.addListener(mediaDesktopHandler);

function mediaDesktopHandler(mql) {

    var sidebar = document.querySelector('.sidebar');

    if (mql.matches) {
        addClass('inactive', sidebar);

    } else {
        removeClass('inactive', sidebar);
    }
}
// ----------------------------------------------
// ----------------------------------------------


// SIDEBAR - SUBMENU ----------------------------
// ----------------------------------------------

initSubmenus();

function initSubmenus() {

    var openers = document.querySelectorAll('.js-opener');

    for (var i = 0; i < openers.length; i++) {

        openers[i].addEventListener('click', function (e) {
            e.preventDefault();

            var parentNode = e.target.parentNode;
            var submenu = parentNode.querySelector('.submenu');
            var icon = parentNode.querySelector('.opener__icon');

            toggleClass('d-block', submenu);
            toggleClass('opener__icon--rotate', icon);
        });
    }
}
// ----------------------------------------------
// ----------------------------------------------


// SIDEBAR - SCROLL LOCK ------------------------
// ----------------------------------------------

var sidebarInner = document.querySelector('.inner');
var clientHeight = 0;
var scrollPos = 0;

window.addEventListener('scroll', function () {
    clientHeight = document.documentElement.clientHeight;
    scrollPos = window.scrollY;

    if (scrollPos + clientHeight >= sidebarInner.offsetHeight - 1) {
        var top = sidebarInner.offsetHeight - clientHeight;

        sidebarInner.style.position = ' fixed';
        sidebarInner.style.top = ' -' + top + 'px';
    } else {
        sidebarInner.style.position = '';
        sidebarInner.style.top = '';
    }
});
// ----------------------------------------------
// ----------------------------------------------


// SIDEBAR - TOGGLE BUTTON ----------------------
// ----------------------------------------------

var toggleBtn = document.querySelector('.toggle');

toggleBtn.addEventListener('click', function () {
    var sidebar = document.querySelector('.sidebar');

    toggleClass('inactive', sidebar);
});
// ----------------------------------------------
// ----------------------------------------------


// TOGGLE CLASS ---------------------------------
// ----------------------------------------------

function toggleClass(className, element) {
    if (element.classList) {
        element.classList.toggle(className);
        return;

    } else {
        // For IE 9
        var classes = element.className.split(' ');
        var index = classes.indexOf(className);

        if (index >= 0) classes.splice(index, 1);
        else classes.push(className);

        element.className = classes.join(' ');
    }
}
// ----------------------------------------------
// ----------------------------------------------


// ADD CLASS ------------------------------------
// ----------------------------------------------

function addClass(className, el) {
    if (el.classList) {
        if (!el.classList.contains(className)) {
            el.classList.add(className)
            return;
        }
    } else { // For IE 9
        addClassOld(className, el);
    }
}

function addClassOld(className, el) { // For IE 9
    var classes = el.className.split(' ');

    if (!classes.indexOf(className) >= 0) {
        classes.push(className);
        el.className = classes.join(' ');
    }
}
// ----------------------------------------------
// ----------------------------------------------


// REMOVE CLASS ---------------------------------
// ----------------------------------------------

function removeClass(className, el) {
    if (el.classList) {
        el.classList.remove(className);
        return;

    } else { // FOR IE 9
        removeClassOld(className, el);
    }
}

function removeClassOld(className, el) { // FOR IE 9

    //remove className and white spaces
    var regExp = new RegExp(className + '|\\s', 'g'); 
    el.className = el.className.replace(regExp, '');
}
// ----------------------------------------------
// ----------------------------------------------

})();