<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>nonghyup</title>

    <!-- 제이쿼리 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- owl 캐러셀 불러오기 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css">

    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.theme.default.min.css">

    <!-- 스크롤리 파이 불러오기 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/scrollify/1.0.19/jquery.scrollify.min.js"></script>

    <!-- 폰트 어썸 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">

    <!-- 페이지용 -->
    <link rel="stylesheet" href="/portfolio/rollingpasta/index.css">
    <script src="/portfolio/rollingpasta/index.js"></script>

</head>

<body>
    <!-- 탑바시작 -->
    <div class="top-bar relative">
        <!--  로고 (유령화) -->
        <a href="#" class="logo absoulte-left absolute-middle img-box">
            <img src="http://rolling-pasta.com/_imgs/header_logo.png" alt="">
            <img class="on absolute-left absolute-top" src="http://rolling-pasta.com/_imgs/header_logo_on.png" alt="">
        </a>
        <!-- 가운데 메뉴바   -->
        <nav class="menu-box-1 text-align-center line-height-0-ch-only">
            <ul class="row inline-block">
                <li class="cell page-1-menu-item"><a href="#page-1" class="block">Rolling Pasta</a></li>
                <li class="cell page-2-menu-item"><a href="#page-2" class="block">Menu</a></li>
                <li class="cell page-3-menu-item"><a href="#page-3" class="block">Store</a></li>
                <li class="cell page-4-menu-item"><a href="#page-4" class="block">Franchise</a></li>
                <li class="cell page-5-menu-item cs-center-cell">
                    <a href="#page-6" class="block relative">
                        CS center
                        <span class="ico ico-1 absolute-right absolude-middle"></span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <!-- 스크롤리파이적용 -->
    <div class="page-indicator-box"></div>

    <!-- 팝업 박스 만들기 -->
    <div class="popup-box-1">
        <div class="img-box">
            <img src="http://junekorea.github.io/img1/ph/rollingpasta/p1.jpg" alt="">
            <img src="http://junekorea.github.io/img1/ph/rollingpasta/p2.jpg" alt="">
        </div>
        <div class="row">
            <div class="cell"><a href="#" class="block btn-close">오늘 하루 보지 않기</a></div>
            <div class="cell"><a href="#" class="block btn-close">닫기</a></div>
        </div>
    </div>

    <!--메인페이지 -->
    <div class="pages">
        <div data-section-name="page-1" class="page-1 pag relative">
            <div class="scroll-down-icon-box">
                <a href="#page-2" class="img-box block">
                    <img src="http://junekorea.github.io/img1/ph/rollingpasta/scroll2.png" alt="">
                </a>
            </div>
            <div class="my-carousel-1">
                <div class="owl-carousel owl-theme">
                    <!-- 필수 : .owl-carousel와 .owl-theme -->
                    <div class="item"
                        style="background-image: url(http://junekorea.github.io/img1/ph/rollingpasta//intro_slide1_0506.jpg);">
                    </div>
                    <div class="item"
                        style="background-image: url(http://junekorea.github.io/img1/ph/rollingpasta//intro_slide2.jpg);">
                    </div>
                    <div class="item"
                        style="background-image: url(http://junekorea.github.io/img1/ph/rollingpasta//intro_slide3.jpg);">
                    </div>
                    <div class="item"
                        style="background-image: url(http://junekorea.github.io/img1/ph/rollingpasta//intro_slide4.jpg);">
                    </div>
                </div>
            </div>
            <h1>페이지1</h1>
        </div>
        <div data-section-name="page-2" class="page-2 page">
            <h1>페이지2</h1>
        </div>
        <div data-section-name="page-3" class="page-3 page">
            <h1>페이지3</h1>
        </div>
        <div data-section-name="page-4" class="page-4 page">
            <h1>페이지4</h1>
        </div>
        <div data-section-name="page-5" class="page-5 page">
            <h1>페이지5</h1>
        </div>
    </div>

</body>

</html>