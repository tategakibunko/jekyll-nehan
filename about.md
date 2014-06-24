---
layout: page
title: About
permalink: /about/
---

## Summary

[jekyll-nehan](https://github.com/tategakibunko/jekyll-nehan) is Jekyll theme powered by [nehan.js](https://github.com/tategakibunko/nehan.js) to display your blog post like book style.

## Screen shot

<a style="float:left; margin-right:20px; border:1px solid #ccc;" href="{{site.baseurl}}/assets/sshot-hori.png"><img src="{{site.baseurl}}/assets/sshot-hori.png" width="300" height="160" /></a>

<a style="float:left; border:1px solid #ccc;" href="{{site.baseurl}}/assets/sshot-vert.png"><img src="{{site.baseurl}}/assets/sshot-vert.png" width="300" height="160" /></a>

<div style="clear:both"></div>
<br />


## How to use

Just add <code>book_type</code>('vert' or 'hori') to the header of post.

{% highlight text %}
---
layout: post
title: your awesome book
date: 2014-06-23
book_type: hori
---
{% endhighlight %}

<code>hori</code> means 'horizontal text style', and <code>vert</code> means 'vertical text style'.


## Keyboard shortcuts

- <code>j</code> : goto next page
- <code>k</code> : goto previous page
- <code>left</code>: next(vert), previous(hori)
- <code>right</code>: previous(vert), next(hori)

## License

jekyll-nehan is licensed under MIT License.

