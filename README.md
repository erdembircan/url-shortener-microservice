<h1 align = "center">
<img width="60px" src ="https://avatars0.githubusercontent.com/u/9892522?s=400&v=4" /> <br/>
freeCodeCamp <br/>
URL Shortener Microservice API Project</h1>

<blockquote>
      User stories:
      <ul>1) I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.</ul>
      <ul>2) When I visit that shortened URL, it will redirect me to my original link.</ul>
</blockquote>

<h3>Creation Usage:</h3>
 <code>https://quiet-plains-32637.herokuapp.com/new/https://www.google.com</code>
<h3>Creation output:</h3>
<samp>
{ "original_url":"https://www.google.com", "short_url":"https://quiet-plains-32637.herokuapp.com/8170" }
</samp>
<h3>Usage:</h3>
<code>https://quiet-plains-32637.herokuapp.com/8170</code>
<h3>Will redirect to:</h3>
<code>https://www.google.com/</code>
