#This folder contains all the blog pages
#Guide to create new blog page
1. Create new html file and name it the heading of blog.
    - Use all lowercase letters
    - Replace space character with hyphen(-)
    - Avoid using special charaters/symbols
    - Example: *what-if-pythagoras-theorem-was-wrong.html*
2. Copy and paste the template code below.
3. Add heading, content and other(See the comments on template). __Use semantic elements to define content__.
4. Remove comments and save your file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <!-- Give title the heading of blog -->
    </title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/blog.css">
    <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon">
</head>
<body>
    <div id="nav-bar">
        <span class="logo">
            <img src="/images/logo.png" alt="logo" />
        </span>

        <nav class="hidden">
            <ul>
                <li><a>Courses</a></li>
                <li><a>Blogs</a></li>
                <li><a>Articles</a></li>
                <li><a>Contact</a></li>
                <li><a>About Us</a></li>
            </ul>
        </nav>
        <div class="search-bar">
            <input type="text" name="search-value" placeholder="Search">
            <img src="/images/search-icon.svg" alt="search-icon" class="icon search-icon" />
        </div>
        <div id="account-login">
            <button class="secondary-button">Login</button>
            <button class="primary-button">Sign Up</button>
        </div>
        <i class="icon hamburger-icon"></i>
    </div>
    <main>
        <article class="main">
            <header>
                <h1>
                    <!--Blog heading-->
                </h1>
                <div class="author">
                    <address>
                        <!-- Author Name -->
                    </address>
                    <span>on</span>
                    <time datetime="2021-05-21"><!-- Publish time. Eg. May 21, 2021 --></time>
                </div>
            </header>
            
            <div class="article-content">
                <!-- Content below this line -->







                <!-- Content above this line -->
            </div>

        </article>
        <div class="more-blogs">
            <h1>Other Blogs</h1>
            <div class="blog-card-container">
                <article class="blog-card">
                    <div class="thumbnail"><a><img src="/images/blog/blog-3.png" alt=""></a></div>
                    <h3><a>Importance of Data Science in daily life.</a></h3>
                    <footer class="author">
                        <address>Amit Chauthary</address>
                        <span>on</span>
                        <time datetime="2020-06-16">June 16, 2020</time>
                    </footer>
                </article>
                <article class="blog-card">
                    <div class="thumbnail"><a><img src="/images/blog/Image-2 2.png" alt=""></a></div>
                    <h3><a>Gravity defined features that affect everyone of us.</a></h3>
                    <footer class="author">
                        <address>Amit Chauthary</address>
                        <span>on</span>
                        <time datetime="2020-06-16">June 16, 2020</time>
                    </footer>
                </article>
                <article class="blog-card">
                    <div class="thumbnail"><a><img src="/images/blog/Image 1.png" alt=""></a></div>
                    <h3><a>Are there a couple of universes?</a></h3>
                    <footer class="author">
                        <address>Amit Chauthary</address>
                        <span>on</span>
                        <time datetime="2020-06-16">June 16, 2020</time>
                    </footer>
                </article>
                <article class="blog-card">
                    <div class="thumbnail"><a><img src="/images/blog/Image 1 (1).png" alt=""></a></div>
                    <h3><a>Measuring the circumference of the earth More than 2,000 years ago</a></h3>
                    <footer class="author">
                        <address>Amit Chauthary</address>
                        <span>on</span>
                        <time datetime="2020-06-16">June 16, 2020</time>
                    </footer>
                </article>
            </div>
        </div>
    </main>
    <footer class="page-footer">
        <span class="logo">
            <img src="/images/logo.png" alt="logo" />
        </span>
        <span class="report-message">Found problem in this page? <a>Report Us</a></span>
        <nav>
            <ul class="page-links">
                <li><a>Courses</a></li>
                <li><a>Blogs</a></li>
                <li><a>Articles</a></li>
                <li><a>Contact</a></li>
                <li><a>About Us</a></li>
            </ul>
            <ul class="social-links">
                <li><a><img class="icon facebook" src="/images/social-media-icons.svg" alt="facebook"></a></li>
                <li><a><img class="icon discord" src="/images/social-media-icons.svg" alt="discord"></a></li>
                <li><a><img class="icon youtube" src="/images/social-media-icons.svg" alt="youtube"></a></li>
                <li><a><img class="icon instagram" src="/images/social-media-icons.svg" alt="instagram"></a></li>
                <li><a><img class="icon linkedin" src="/images/social-media-icons.svg" alt="linkedin"></a></li>
            </ul>
        </nav>
        <span class="copyright-text">Copyright &copy; All rights reserved to Math World Nepal</span>
    </footer>
    <script src="/script/style.js"></script>
</body>
</html>

```