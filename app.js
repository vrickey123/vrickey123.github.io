import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar';
import {MDCTabBar} from '@material/tab-bar';

// Top App Bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const toolbar = new MDCToolbar(document.querySelector('.mdc-toolbar'));

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));