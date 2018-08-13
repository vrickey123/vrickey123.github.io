import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTabBar} from '@material/tab-bar';
import {MDCTab} from '@material/tab';

// Top App Bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

const tab = new MDCTab(document.querySelector('.mdc-tab'));