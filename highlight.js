


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>sheetsee.js/highlight.js at master · jlord/sheetsee.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jlord/sheetsee.js" name="twitter:title" /><meta content="sheetsee.js - visualize data from a google spreadsheet" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/1305617?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/1305617?v=3&amp;s=400" property="og:image" /><meta content="jlord/sheetsee.js" property="og:title" /><meta content="https://github.com/jlord/sheetsee.js" property="og:url" /><meta content="sheetsee.js - visualize data from a google spreadsheet" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NDU0MTA3ODpkY2Y2ZWI4MDUyNzUxNjM5NjY2YjBhOWRkOWJmY2E4YjoyNTc4NTJhM2M3NzdjNTU2ODkxYTNjMmE3ZTliMTIzNzczZGVhOTE3N2UxNGM4MWNhNDFiNGJmMTY5NWMyODM1--019fcc6140fe8155087ccfc728ada1b7ec8ffeb9">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="44C2F852:1416:BCB716B:5531C3AA" name="octolytics-dimension-request_id" /><meta content="4541078" name="octolytics-actor-id" /><meta content="vrickey123" name="octolytics-actor-login" /><meta content="0e72e012567490b6d552ec6f24e3e863de3c7df2c283533b80e76a9970a66f85" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="vrickey123">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="X3LlU3hvFx+R8dH+aQ0aHiO/eEc0b55Lqq7u7aEynTwSIeVtsLdvTJ36A+oUZEZqm9fKbnc2QopLtg4whBNc3Q==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-99d0b872ee54fd3afae4675a7592394fa9d65696f8ad7a751b79704bc999f40a.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-4dcecdbd59af4cd1dd8cf24ccaf35b686d848468ddcd7d52a8bf57c21ac4e5fb.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="f16199bf45edde13bbc8d0c453f279fe">

      
  <meta name="description" content="sheetsee.js - visualize data from a google spreadsheet">
  <meta name="go-import" content="github.com/jlord/sheetsee.js git https://github.com/jlord/sheetsee.js.git">

  <meta content="1305617" name="octolytics-dimension-user_id" /><meta content="jlord" name="octolytics-dimension-user_login" /><meta content="5373673" name="octolytics-dimension-repository_id" /><meta content="jlord/sheetsee.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5373673" name="octolytics-dimension-repository_network_root_id" /><meta content="jlord/sheetsee.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jlord/sheetsee.js/commits/master.atom" rel="alternate" title="Recent Commits to sheetsee.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/jlord/sheetsee.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/jlord/sheetsee.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item explore">
            <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
          </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
            </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
          </li>
      </ul>

      
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/vrickey123" data-ga-click="Header, go to profile, text:username">
      <img alt="@vrickey123" class="avatar" data-user="4541078" height="20" src="https://avatars2.githubusercontent.com/u/4541078?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">vrickey123</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="/new" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu">
        
<li>
  <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
</li>
<li>
  <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
</li>


  <li class="dropdown-divider"></li>
  <li class="dropdown-header">
    <span title="jlord/sheetsee.js">This repository</span>
  </li>
    <li>
      <a href="/jlord/sheetsee.js/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>

      </ul>
    </div>
  </li>

  <li class="header-nav-item">
      <span 
        data-channel="notification-changed:vrickey123"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="t9j9zIs8NJpE3vVQXjZ5No/0F4FOFZlond79BSTiMbDCMyACLqNRpW2a5g1CoDJfRxSMgtJmAPvfTaKONq2d0g==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>



    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="y5kSEU1VEnHgsuZonQ7H16jVNDcSge5fFxNocytl7sTLc3uZdEnrotoh/GMtwmi+e/DiMaqQSAhjnhet9kRSJA==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="5373673" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/jlord/sheetsee.js/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/jlord/sheetsee.js/watchers">
          201
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/jlord/sheetsee.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Nvh0HBLpryzYWuUsIwjhxu5sEV8SA1Urd01viqJLYdNte48VTZij0qEgc0L12HyJ6EO2kTlaH8G9xGKoatQcAA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar jlord/sheetsee.js"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jlord/sheetsee.js/stargazers">
          1,648
        </a>
</form>
    <form accept-charset="UTF-8" action="/jlord/sheetsee.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LywoQcpD2Z5t/If6+b3qPGE2fHtZh0jZruyfFN83iLB71ENLTwJFd6wtKku/6hPVSn/9odQzmskJaBbhtWKE0A==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star jlord/sheetsee.js"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/jlord/sheetsee.js/stargazers">
          1,648
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/jlord/sheetsee.js/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LoPAi1W0rMvSb+0clSA6/kCCND5Qzq0Wc7wzT2ua3ivg+W/Pg6302vm8gG7PN0hWov3bGmLVN09FpLvl0Hal3Q==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of jlord/sheetsee.js to your account"
                aria-label="Fork your own copy of jlord/sheetsee.js to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/jlord/sheetsee.js/network" class="social-count">272</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/jlord" class="url fn" itemprop="url" rel="author"><span itemprop="title">jlord</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/jlord/sheetsee.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">sheetsee.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/jlord/sheetsee.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/jlord/sheetsee.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jlord/sheetsee.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/jlord/sheetsee.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jlord/sheetsee.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/jlord/sheetsee.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /jlord/sheetsee.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/jlord/sheetsee.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /jlord/sheetsee.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/jlord/sheetsee.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /jlord/sheetsee.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/jlord/sheetsee.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /jlord/sheetsee.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/jlord/sheetsee.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" data-copy-hint="Copy to clipboard" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:jlord/sheetsee.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" data-copy-hint="Copy to clipboard" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/jlord/sheetsee.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" data-copy-hint="Copy to clipboard" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="https://mac.github.com" class="btn btn-sm sidebar-button" title="Save jlord/sheetsee.js to your computer and use it in GitHub Desktop." aria-label="Save jlord/sheetsee.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>



                <a href="/jlord/sheetsee.js/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of jlord/sheetsee.js as a zip file"
                   title="Download the contents of jlord/sheetsee.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/jlord/sheetsee.js/blob/c637e646b706c517ca4512865117b0bce17d9d93/js/highlight.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:ab79f3705b73688d87ba1fb9761f304a -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jlord/sheetsee.js/blob/gh-pages/js/highlight.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jlord/sheetsee.js/blob/gh-pages-v1/js/highlight.js"
               data-name="gh-pages-v1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages-v1">
                gh-pages-v1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jlord/sheetsee.js/blob/master/js/highlight.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jlord/sheetsee.js/blob/modules/js/highlight.js"
               data-name="modules"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="modules">
                modules
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jlord/sheetsee.js/blob/paginate-the-things/js/highlight.js"
               data-name="paginate-the-things"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="paginate-the-things">
                paginate-the-things
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jlord/sheetsee.js/blob/polys/js/highlight.js"
               data-name="polys"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="polys">
                polys
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jlord/sheetsee.js/blob/remixz-browserify/js/highlight.js"
               data-name="remixz-browserify"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="remixz-browserify">
                remixz-browserify
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jlord/sheetsee.js/blob/twooh/js/highlight.js"
               data-name="twooh"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="twooh">
                twooh
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jlord/sheetsee.js/blob/v1/js/highlight.js"
               data-name="v1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1">
                v1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jlord/sheetsee.js/blob/v2-gh-pages/js/highlight.js"
               data-name="v2-gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2-gh-pages">
                v2-gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jlord/sheetsee.js/blob/v2-master/js/highlight.js"
               data-name="v2-master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v2-master">
                v2-master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jlord/sheetsee.js/tree/v1.0.0/js/highlight.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/jlord/sheetsee.js/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" data-copy-hint="Copy file path to clipboard" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jlord/sheetsee.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">sheetsee.js</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jlord/sheetsee.js/tree/master/js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">highlight.js</strong>
  </div>
</div>

<include-fragment class="commit commit-loader file-history-tease" src="/jlord/sheetsee.js/contributors/master/js/highlight.js">
  <div class="file-history-tease-header">
    Fetching contributors&hellip;
  </div>

  <div class="participation">
    <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-EAF2F5-0bdc57d34b85c4a4de9d0d1db10cd70e8a95f33ff4f46c5a8c48b4bf4e5a9abe.gif" width="16" /></p>
    <p class="loader-error">Cannot retrieve contributors at this time</p>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/jlord/sheetsee.js/raw/master/js/highlight.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/jlord/sheetsee.js/blame/master/js/highlight.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/jlord/sheetsee.js/commits/master/js/highlight.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://mac.github.com"
           aria-label="Open this file in GitHub for Mac">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/jlord/sheetsee.js/edit/master/js/highlight.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="URxHQnxYMt649xvxyKMX+Wc8QlQGj+hKjImHS5mkSJDhiS5kEL3MZDkbnZuSlGWmlP9oCEMcU84mo6v6sMSZsw==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/jlord/sheetsee.js/delete/master/js/highlight.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="GB4ixaBBxaSVQiqY/mPUosancoqnbv/STIV6pIsEixAguLjy6aFbhb5Tbeh79eh8ZoXASETAgWWyC3LAqc5Uyw==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete this file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        1 lines (1 sloc)
        <span class="file-info-divider"></span>
      12.834 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line">var hljs=new function(){function k(v){return v.replace(/&amp;/gm,&quot;&amp;amp;&quot;).replace(/&lt;/gm,&quot;&amp;lt;&quot;).replace(/&gt;/gm,&quot;&amp;gt;&quot;)}function t(v){return v.nodeName.toLowerCase()}function i(w,x){var v=w&amp;&amp;w.exec(x);return v&amp;&amp;v.index==0}function d(v){return Array.prototype.map.call(v.childNodes,function(w){if(w.nodeType==3){return b.useBR?w.nodeValue.replace(/\n/g,&quot;&quot;):w.nodeValue}if(t(w)==&quot;br&quot;){return&quot;\n&quot;}return d(w)}).join(&quot;&quot;)}function r(w){var v=(w.className+&quot; &quot;+(w.parentNode?w.parentNode.className:&quot;&quot;)).split(/\s+/);v=v.map(function(x){return x.replace(/^language-/,&quot;&quot;)});return v.filter(function(x){return j(x)||x==&quot;no-highlight&quot;})[0]}function o(x,y){var v={};for(var w in x){v[w]=x[w]}if(y){for(var w in y){v[w]=y[w]}}return v}function u(x){var v=[];(function w(y,z){for(var A=y.firstChild;A;A=A.nextSibling){if(A.nodeType==3){z+=A.nodeValue.length}else{if(t(A)==&quot;br&quot;){z+=1}else{if(A.nodeType==1){v.push({event:&quot;start&quot;,offset:z,node:A});z=w(A,z);v.push({event:&quot;stop&quot;,offset:z,node:A})}}}}return z})(x,0);return v}function q(w,y,C){var x=0;var F=&quot;&quot;;var z=[];function B(){if(!w.length||!y.length){return w.length?w:y}if(w[0].offset!=y[0].offset){return(w[0].offset&lt;y[0].offset)?w:y}return y[0].event==&quot;start&quot;?w:y}function A(H){function G(I){return&quot; &quot;+I.nodeName+&#39;=&quot;&#39;+k(I.value)+&#39;&quot;&#39;}F+=&quot;&lt;&quot;+t(H)+Array.prototype.map.call(H.attributes,G).join(&quot;&quot;)+&quot;&gt;&quot;}function E(G){F+=&quot;&lt;/&quot;+t(G)+&quot;&gt;&quot;}function v(G){(G.event==&quot;start&quot;?A:E)(G.node)}while(w.length||y.length){var D=B();F+=k(C.substr(x,D[0].offset-x));x=D[0].offset;if(D==w){z.reverse().forEach(E);do{v(D.splice(0,1)[0]);D=B()}while(D==w&amp;&amp;D.length&amp;&amp;D[0].offset==x);z.reverse().forEach(A)}else{if(D[0].event==&quot;start&quot;){z.push(D[0].node)}else{z.pop()}v(D.splice(0,1)[0])}}return F+k(C.substr(x))}function m(y){function v(z){return(z&amp;&amp;z.source)||z}function w(A,z){return RegExp(v(A),&quot;m&quot;+(y.cI?&quot;i&quot;:&quot;&quot;)+(z?&quot;g&quot;:&quot;&quot;))}function x(D,C){if(D.compiled){return}D.compiled=true;D.k=D.k||D.bK;if(D.k){var z={};function E(G,F){if(y.cI){F=F.toLowerCase()}F.split(&quot; &quot;).forEach(function(H){var I=H.split(&quot;|&quot;);z[I[0]]=[G,I[1]?Number(I[1]):1]})}if(typeof D.k==&quot;string&quot;){E(&quot;keyword&quot;,D.k)}else{Object.keys(D.k).forEach(function(F){E(F,D.k[F])})}D.k=z}D.lR=w(D.l||/\b[A-Za-z0-9_]+\b/,true);if(C){if(D.bK){D.b=D.bK.split(&quot; &quot;).join(&quot;|&quot;)}if(!D.b){D.b=/\B|\b/}D.bR=w(D.b);if(!D.e&amp;&amp;!D.eW){D.e=/\B|\b/}if(D.e){D.eR=w(D.e)}D.tE=v(D.e)||&quot;&quot;;if(D.eW&amp;&amp;C.tE){D.tE+=(D.e?&quot;|&quot;:&quot;&quot;)+C.tE}}if(D.i){D.iR=w(D.i)}if(D.r===undefined){D.r=1}if(!D.c){D.c=[]}var B=[];D.c.forEach(function(F){if(F.v){F.v.forEach(function(G){B.push(o(F,G))})}else{B.push(F==&quot;self&quot;?D:F)}});D.c=B;D.c.forEach(function(F){x(F,D)});if(D.starts){x(D.starts,C)}var A=D.c.map(function(F){return F.bK?&quot;\\.?\\b(&quot;+F.b+&quot;)\\b\\.?&quot;:F.b}).concat([D.tE]).concat([D.i]).map(v).filter(Boolean);D.t=A.length?w(A.join(&quot;|&quot;),true):{exec:function(F){return null}};D.continuation={}}x(y)}function c(S,L,J,R){function v(U,V){for(var T=0;T&lt;V.c.length;T++){if(i(V.c[T].bR,U)){return V.c[T]}}}function z(U,T){if(i(U.eR,T)){return U}if(U.eW){return z(U.parent,T)}}function A(T,U){return !J&amp;&amp;i(U.iR,T)}function E(V,T){var U=M.cI?T[0].toLowerCase():T[0];return V.k.hasOwnProperty(U)&amp;&amp;V.k[U]}function w(Z,X,W,V){var T=V?&quot;&quot;:b.classPrefix,U=&#39;&lt;span class=&quot;&#39;+T,Y=W?&quot;&quot;:&quot;&lt;/span&gt;&quot;;U+=Z+&#39;&quot;&gt;&#39;;return U+X+Y}function N(){var U=k(C);if(!I.k){return U}var T=&quot;&quot;;var X=0;I.lR.lastIndex=0;var V=I.lR.exec(U);while(V){T+=U.substr(X,V.index-X);var W=E(I,V);if(W){H+=W[1];T+=w(W[0],V[0])}else{T+=V[0]}X=I.lR.lastIndex;V=I.lR.exec(U)}return T+U.substr(X)}function F(){if(I.sL&amp;&amp;!f[I.sL]){return k(C)}var T=I.sL?c(I.sL,C,true,I.continuation.top):g(C);if(I.r&gt;0){H+=T.r}if(I.subLanguageMode==&quot;continuous&quot;){I.continuation.top=T.top}return w(T.language,T.value,false,true)}function Q(){return I.sL!==undefined?F():N()}function P(V,U){var T=V.cN?w(V.cN,&quot;&quot;,true):&quot;&quot;;if(V.rB){D+=T;C=&quot;&quot;}else{if(V.eB){D+=k(U)+T;C=&quot;&quot;}else{D+=T;C=U}}I=Object.create(V,{parent:{value:I}})}function G(T,X){C+=T;if(X===undefined){D+=Q();return 0}var V=v(X,I);if(V){D+=Q();P(V,X);return V.rB?0:X.length}var W=z(I,X);if(W){var U=I;if(!(U.rE||U.eE)){C+=X}D+=Q();do{if(I.cN){D+=&quot;&lt;/span&gt;&quot;}H+=I.r;I=I.parent}while(I!=W.parent);if(U.eE){D+=k(X)}C=&quot;&quot;;if(W.starts){P(W.starts,&quot;&quot;)}return U.rE?0:X.length}if(A(X,I)){throw new Error(&#39;Illegal lexeme &quot;&#39;+X+&#39;&quot; for mode &quot;&#39;+(I.cN||&quot;&lt;unnamed&gt;&quot;)+&#39;&quot;&#39;)}C+=X;return X.length||1}var M=j(S);if(!M){throw new Error(&#39;Unknown language: &quot;&#39;+S+&#39;&quot;&#39;)}m(M);var I=R||M;var D=&quot;&quot;;for(var K=I;K!=M;K=K.parent){if(K.cN){D=w(K.cN,D,true)}}var C=&quot;&quot;;var H=0;try{var B,y,x=0;while(true){I.t.lastIndex=x;B=I.t.exec(L);if(!B){break}y=G(L.substr(x,B.index-x),B[0]);x=B.index+y}G(L.substr(x));for(var K=I;K.parent;K=K.parent){if(K.cN){D+=&quot;&lt;/span&gt;&quot;}}return{r:H,value:D,language:S,top:I}}catch(O){if(O.message.indexOf(&quot;Illegal&quot;)!=-1){return{r:0,value:k(L)}}else{throw O}}}function g(y,x){x=x||b.languages||Object.keys(f);var v={r:0,value:k(y)};var w=v;x.forEach(function(z){if(!j(z)){return}var A=c(z,y,false);A.language=z;if(A.r&gt;w.r){w=A}if(A.r&gt;v.r){w=v;v=A}});if(w.language){v.second_best=w}return v}function h(v){if(b.tabReplace){v=v.replace(/^((&lt;[^&gt;]+&gt;|\t)+)/gm,function(w,z,y,x){return z.replace(/\t/g,b.tabReplace)})}if(b.useBR){v=v.replace(/\n/g,&quot;&lt;br&gt;&quot;)}return v}function p(z){var y=d(z);var A=r(z);if(A==&quot;no-highlight&quot;){return}var v=A?c(A,y,true):g(y);var w=u(z);if(w.length){var x=document.createElementNS(&quot;http://www.w3.org/1999/xhtml&quot;,&quot;pre&quot;);x.innerHTML=v.value;v.value=q(w,u(x),y)}v.value=h(v.value);z.innerHTML=v.value;z.className+=&quot; hljs &quot;+(!A&amp;&amp;v.language||&quot;&quot;);z.result={language:v.language,re:v.r};if(v.second_best){z.second_best={language:v.second_best.language,re:v.second_best.r}}}var b={classPrefix:&quot;hljs-&quot;,tabReplace:null,useBR:false,languages:undefined};function s(v){b=o(b,v)}function l(){if(l.called){return}l.called=true;var v=document.querySelectorAll(&quot;pre code&quot;);Array.prototype.forEach.call(v,p)}function a(){addEventListener(&quot;DOMContentLoaded&quot;,l,false);addEventListener(&quot;load&quot;,l,false)}var f={};var n={};function e(v,x){var w=f[v]=x(this);if(w.aliases){w.aliases.forEach(function(y){n[y]=v})}}function j(v){return f[v]||f[n[v]]}this.highlight=c;this.highlightAuto=g;this.fixMarkup=h;this.highlightBlock=p;this.configure=s;this.initHighlighting=l;this.initHighlightingOnLoad=a;this.registerLanguage=e;this.getLanguage=j;this.inherit=o;this.IR=&quot;[a-zA-Z][a-zA-Z0-9_]*&quot;;this.UIR=&quot;[a-zA-Z_][a-zA-Z0-9_]*&quot;;this.NR=&quot;\\b\\d+(\\.\\d+)?&quot;;this.CNR=&quot;(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)&quot;;this.BNR=&quot;\\b(0b[01]+)&quot;;this.RSR=&quot;!|!=|!==|%|%=|&amp;|&amp;&amp;|&amp;=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|&lt;&lt;|&lt;&lt;=|&lt;=|&lt;|===|==|=|&gt;&gt;&gt;=|&gt;&gt;=|&gt;=|&gt;&gt;&gt;|&gt;&gt;|&gt;|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~&quot;;this.BE={b:&quot;\\\\[\\s\\S]&quot;,r:0};this.ASM={cN:&quot;string&quot;,b:&quot;&#39;&quot;,e:&quot;&#39;&quot;,i:&quot;\\n&quot;,c:[this.BE]};this.QSM={cN:&quot;string&quot;,b:&#39;&quot;&#39;,e:&#39;&quot;&#39;,i:&quot;\\n&quot;,c:[this.BE]};this.CLCM={cN:&quot;comment&quot;,b:&quot;//&quot;,e:&quot;$&quot;};this.CBLCLM={cN:&quot;comment&quot;,b:&quot;/\\*&quot;,e:&quot;\\*/&quot;};this.HCM={cN:&quot;comment&quot;,b:&quot;#&quot;,e:&quot;$&quot;};this.NM={cN:&quot;number&quot;,b:this.NR,r:0};this.CNM={cN:&quot;number&quot;,b:this.CNR,r:0};this.BNM={cN:&quot;number&quot;,b:this.BNR,r:0};this.REGEXP_MODE={cN:&quot;regexp&quot;,b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.TM={cN:&quot;title&quot;,b:this.IR,r:0};this.UTM={cN:&quot;title&quot;,b:this.UIR,r:0}}();hljs.registerLanguage(&quot;bash&quot;,function(b){var a={cN:&quot;variable&quot;,v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]};var d={cN:&quot;string&quot;,b:/&quot;/,e:/&quot;/,c:[b.BE,a,{cN:&quot;variable&quot;,b:/\$\(/,e:/\)/,c:[b.BE]}]};var c={cN:&quot;string&quot;,b:/&#39;/,e:/&#39;/};return{l:/-?[a-z\.]+/,k:{keyword:&quot;if then else elif fi for break continue while in do done exit return set declare case esac export exec&quot;,literal:&quot;true false&quot;,built_in:&quot;printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo&quot;,operator:&quot;-ne -eq -lt -gt -f -d -e -s -l -a&quot;},c:[{cN:&quot;shebang&quot;,b:/^#![^\n]+sh\s*$/,r:10},{cN:&quot;function&quot;,b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:true,c:[b.inherit(b.TM,{b:/\w[\w\d_]*/})],r:0},b.HCM,b.NM,d,c,a]}});hljs.registerLanguage(&quot;diff&quot;,function(a){return{c:[{cN:&quot;chunk&quot;,r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:&quot;header&quot;,v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:&quot;addition&quot;,b:&quot;^\\+&quot;,e:&quot;$&quot;},{cN:&quot;deletion&quot;,b:&quot;^\\-&quot;,e:&quot;$&quot;},{cN:&quot;change&quot;,b:&quot;^\\!&quot;,e:&quot;$&quot;}]}});hljs.registerLanguage(&quot;javascript&quot;,function(a){return{aliases:[&quot;js&quot;],k:{keyword:&quot;in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class&quot;,literal:&quot;true false null undefined NaN Infinity&quot;,built_in:&quot;eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require&quot;},c:[{cN:&quot;pi&quot;,b:/^\s*(&#39;|&quot;)use strict(&#39;|&quot;)/,r:10},a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:&quot;(&quot;+a.RSR+&quot;|\\b(case|return|throw)\\b)\\s*&quot;,k:&quot;return throw case&quot;,c:[a.CLCM,a.CBLCLM,a.REGEXP_MODE,{b:/&lt;/,e:/&gt;;/,r:0,sL:&quot;xml&quot;}],r:0},{cN:&quot;function&quot;,bK:&quot;function&quot;,e:/\{/,c:[a.inherit(a.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:&quot;params&quot;,b:/\(/,e:/\)/,c:[a.CLCM,a.CBLCLM],i:/[&quot;&#39;\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:&quot;\\.&quot;+a.IR,r:0}]}});hljs.registerLanguage(&quot;xml&quot;,function(a){var c=&quot;[A-Za-z0-9\\._:-]+&quot;;var d={b:/&lt;\?(php)?(?!\w)/,e:/\?&gt;/,sL:&quot;php&quot;,subLanguageMode:&quot;continuous&quot;};var b={eW:true,i:/&lt;/,r:0,c:[d,{cN:&quot;attribute&quot;,b:c,r:0},{b:&quot;=&quot;,r:0,c:[{cN:&quot;value&quot;,v:[{b:/&quot;/,e:/&quot;/},{b:/&#39;/,e:/&#39;/},{b:/[^\s\/&gt;]+/}]}]}]};return{aliases:[&quot;html&quot;],cI:true,c:[{cN:&quot;doctype&quot;,b:&quot;&lt;!DOCTYPE&quot;,e:&quot;&gt;&quot;,r:10,c:[{b:&quot;\\[&quot;,e:&quot;\\]&quot;}]},{cN:&quot;comment&quot;,b:&quot;&lt;!--&quot;,e:&quot;--&gt;&quot;,r:10},{cN:&quot;cdata&quot;,b:&quot;&lt;\\!\\[CDATA\\[&quot;,e:&quot;\\]\\]&gt;&quot;,r:10},{cN:&quot;tag&quot;,b:&quot;&lt;style(?=\\s|&gt;|$)&quot;,e:&quot;&gt;&quot;,k:{title:&quot;style&quot;},c:[b],starts:{e:&quot;&lt;/style&gt;&quot;,rE:true,sL:&quot;css&quot;}},{cN:&quot;tag&quot;,b:&quot;&lt;script(?=\\s|&gt;|$)&quot;,e:&quot;&gt;&quot;,k:{title:&quot;script&quot;},c:[b],starts:{e:&quot;&lt;\/script&gt;&quot;,rE:true,sL:&quot;javascript&quot;}},{b:&quot;&lt;%&quot;,e:&quot;%&gt;&quot;,sL:&quot;vbscript&quot;},d,{cN:&quot;pi&quot;,b:/&lt;\?\w+/,e:/\?&gt;/,r:10},{cN:&quot;tag&quot;,b:&quot;&lt;/?&quot;,e:&quot;/?&gt;&quot;,c:[{cN:&quot;title&quot;,b:&quot;[^ /&gt;&lt;]+&quot;,r:0},b]}]}});hljs.registerLanguage(&quot;markdown&quot;,function(a){return{c:[{cN:&quot;header&quot;,v:[{b:&quot;^#{1,6}&quot;,e:&quot;$&quot;},{b:&quot;^.+?\\n[=-]{2,}$&quot;}]},{b:&quot;&lt;&quot;,e:&quot;&gt;&quot;,sL:&quot;xml&quot;,r:0},{cN:&quot;bullet&quot;,b:&quot;^([*+-]|(\\d+\\.))\\s+&quot;},{cN:&quot;strong&quot;,b:&quot;[*_]{2}.+?[*_]{2}&quot;},{cN:&quot;emphasis&quot;,v:[{b:&quot;\\*.+?\\*&quot;},{b:&quot;_.+?_&quot;,r:0}]},{cN:&quot;blockquote&quot;,b:&quot;^&gt;\\s+&quot;,e:&quot;$&quot;},{cN:&quot;code&quot;,v:[{b:&quot;`.+?`&quot;},{b:&quot;^( {4}|\t)&quot;,e:&quot;$&quot;,r:0}]},{cN:&quot;horizontal_rule&quot;,b:&quot;^[-\\*]{3,}&quot;,e:&quot;$&quot;},{b:&quot;\\[.+?\\][\\(\\[].+?[\\)\\]]&quot;,rB:true,c:[{cN:&quot;link_label&quot;,b:&quot;\\[&quot;,e:&quot;\\]&quot;,eB:true,rE:true,r:0},{cN:&quot;link_url&quot;,b:&quot;\\]\\(&quot;,e:&quot;\\)&quot;,eB:true,eE:true},{cN:&quot;link_reference&quot;,b:&quot;\\]\\[&quot;,e:&quot;\\]&quot;,eB:true,eE:true,}],r:10},{b:&quot;^\\[.+\\]:&quot;,e:&quot;$&quot;,rB:true,c:[{cN:&quot;link_reference&quot;,b:&quot;\\[&quot;,e:&quot;\\]&quot;,eB:true,eE:true},{cN:&quot;link_url&quot;,b:&quot;\\s&quot;,e:&quot;$&quot;}]}]}});hljs.registerLanguage(&quot;css&quot;,function(a){var b=&quot;[a-zA-Z-][a-zA-Z0-9_-]*&quot;;var c={cN:&quot;function&quot;,b:b+&quot;\\(&quot;,e:&quot;\\)&quot;,c:[&quot;self&quot;,a.NM,a.ASM,a.QSM]};return{cI:true,i:&quot;[=/|&#39;]&quot;,c:[a.CBLCLM,{cN:&quot;id&quot;,b:&quot;\\#[A-Za-z0-9_-]+&quot;},{cN:&quot;class&quot;,b:&quot;\\.[A-Za-z0-9_-]+&quot;,r:0},{cN:&quot;attr_selector&quot;,b:&quot;\\[&quot;,e:&quot;\\]&quot;,i:&quot;$&quot;},{cN:&quot;pseudo&quot;,b:&quot;:(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\&quot;\\&#39;]+&quot;},{cN:&quot;at_rule&quot;,b:&quot;@(font-face|page)&quot;,l:&quot;[a-z-]+&quot;,k:&quot;font-face page&quot;},{cN:&quot;at_rule&quot;,b:&quot;@&quot;,e:&quot;[{;]&quot;,c:[{cN:&quot;keyword&quot;,b:/\S+/},{b:/\s/,eW:true,eE:true,r:0,c:[c,a.ASM,a.QSM,a.NM]}]},{cN:&quot;tag&quot;,b:b,r:0},{cN:&quot;rules&quot;,b:&quot;{&quot;,e:&quot;}&quot;,i:&quot;[^\\s]&quot;,r:0,c:[a.CBLCLM,{cN:&quot;rule&quot;,b:&quot;[^\\s]&quot;,rB:true,e:&quot;;&quot;,eW:true,c:[{cN:&quot;attribute&quot;,b:&quot;[A-Z\\_\\.\\-]+&quot;,e:&quot;:&quot;,eE:true,i:&quot;[^\\s]&quot;,starts:{cN:&quot;value&quot;,eW:true,eE:true,c:[c,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:&quot;hexcolor&quot;,b:&quot;#[0-9A-Fa-f]+&quot;},{cN:&quot;important&quot;,b:&quot;!important&quot;}]}}]}]}]}});hljs.registerLanguage(&quot;http&quot;,function(a){return{i:&quot;\\S&quot;,c:[{cN:&quot;status&quot;,b:&quot;^HTTP/[0-9\\.]+&quot;,e:&quot;$&quot;,c:[{cN:&quot;number&quot;,b:&quot;\\b\\d{3}\\b&quot;}]},{cN:&quot;request&quot;,b:&quot;^[A-Z]+ (.*?) HTTP/[0-9\\.]+$&quot;,rB:true,e:&quot;$&quot;,c:[{cN:&quot;string&quot;,b:&quot; &quot;,e:&quot; &quot;,eB:true,eE:true}]},{cN:&quot;attribute&quot;,b:&quot;^\\w&quot;,e:&quot;: &quot;,eE:true,i:&quot;\\n|\\s|=&quot;,starts:{cN:&quot;string&quot;,e:&quot;$&quot;}},{b:&quot;\\n\\n&quot;,starts:{sL:&quot;&quot;,eW:true}}]}});hljs.registerLanguage(&quot;ini&quot;,function(a){return{cI:true,i:/\S/,c:[{cN:&quot;comment&quot;,b:&quot;;&quot;,e:&quot;$&quot;},{cN:&quot;title&quot;,b:&quot;^\\[&quot;,e:&quot;\\]&quot;},{cN:&quot;setting&quot;,b:&quot;^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*&quot;,e:&quot;$&quot;,c:[{cN:&quot;value&quot;,eW:true,k:&quot;on off true false yes no&quot;,c:[a.QSM,a.NM],r:0}]}]}});hljs.registerLanguage(&quot;json&quot;,function(a){var e={literal:&quot;true false null&quot;};var d=[a.QSM,a.CNM];var c={cN:&quot;value&quot;,e:&quot;,&quot;,eW:true,eE:true,c:d,k:e};var b={b:&quot;{&quot;,e:&quot;}&quot;,c:[{cN:&quot;attribute&quot;,b:&#39;\\s*&quot;&#39;,e:&#39;&quot;\\s*:\\s*&#39;,eB:true,eE:true,c:[a.BE],i:&quot;\\n&quot;,starts:c}],i:&quot;\\S&quot;};var f={b:&quot;\\[&quot;,e:&quot;\\]&quot;,c:[a.inherit(c,{cN:null})],i:&quot;\\S&quot;};d.splice(d.length,0,b,f);return{c:d,k:e,i:&quot;\\S&quot;}});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05210s from github-fe120-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2c8ae50712a47d2b83d740cb875d55cdbbb3fdbccf303951cc6b7e63731e0c38.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-29f1a3f7b7d09cac4ebdeb6f7c87beaaef3237771dd3902546393d943f1c5269.js"></script>
      
      


  </body>
</html>

