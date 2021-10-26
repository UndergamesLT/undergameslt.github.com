! function(e) {
    var t = {};

    function o(s) {
        if (t[s]) return t[s].exports;
        var n = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, s) {
        o.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: s
        })
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/", o(o.s = 95)
}({
    0: function(e, t) {
        $(document).ready(function() {
            $(document).on("click", ".lang", function() {
                var e = $(this);
                $(this).toggleClass("active"), $(document).mouseup(function(t) {
                    var o = e;
                    o.is(t.target) || 0 !== o.has(t.target).length || o.removeClass("active")
                })
            }), $(".js-select").length > 0 && $(".js-select").select2(), $(".btn-shop-link").length > 0 && ($(".btn-shop").click(function() {
                "visible" === $(".shop-popup").css("visibility") ? ($(this).removeClass("active"), $(".shop-popup").removeClass("active")) : ($(this).addClass("active"), $(".shop-popup").addClass("active"))
            }), $(document).mouseup(function(e) {
                var t = $(".shop-popup");
                t.is(e.target) || 0 !== t.has(e.target).length || (t.removeClass("active"), $(".btn-shop-link").removeClass("active"))
            }));
            var e = null;

            function t() {
                var e = document.getElementById("slider-pips2");
                noUiSlider.create(e, {
                    range: {
                        min: 50,
                        max: 300
                    },
                    start: [50],
                    pips: {
                        mode: "count",
                        values: 5
                    }
                });
                var t = e.querySelectorAll(".noUi-value");

                function o() {
                    var t = Number(this.getAttribute("data-value"));
                    e.noUiSlider.set(t)
                }
                for (var s = 0; s < t.length; s++) t[s].style.cursor = "pointer", t[s].addEventListener("click", o);
                e.noUiSlider.on("change", function(e, t) {
                    $("#slider-pips2").data("price", e[0]), $(".mobile-menu-dropdown .title").css("opacity", 1)
                }), $(document).on("click", ".price-header-button", function(e) {
                    e.preventDefault(), window.location.href = $("#slider-pips2").data("action") + "?price_to=" + $("#slider-pips2").data("price")
                })
            }

            function o(e) {
                e.toggleClass("active"), $(".mobile-menu-dropdown").toggleClass("active"), $("body").toggleClass("overflow")
            }
            if ($(".header-search .input-text").on("input", function() {
                    var t = $(".header-search-dropdown"),
                        o = $("body");
                    t.removeClass("active"), o.removeClass("overflow");
                    var s = $(this).closest("form").data("ajax") + "?search=" + $(this).val();
                    e && clearTimeout(e), e = setTimeout(function() {
                        $.ajax({
                            url: s,
                            method: "get",
                            success: function(e) {
                                t.removeClass("active"), o.removeClass("overflow"), e && ($(".header-search-dropdown").length > 0 && $(".header-search-dropdown").html(e), $(".header-search-mob-dropdown").length > 0 && $(".header-search-mob-dropdown").html(e), $(".header-search-dropdown").addClass("active"), $("body").addClass("overflow"))
                            }
                        })
                    }, 2e3), $(document).mouseup(function(e) {
                        var t = $(".header-search-dropdown");
                        t.is(e.target) || 0 !== t.has(e.target).length || t.removeClass("active")
                    })
                }), $(".header-search .input-text").on("input", function() {
                    "" !== $(this).val() ? $(".header-search-mob-dropdown").addClass("active") : $(".header-search-mob-dropdown").removeClass("active")
                }), $(".mobile-menu-toggle").click(function() {
                    var e = $(this);
                    $(".mobile-menu-dropdown").length < 1 ? function(e) {
                        var s = window.locale ? "/" + window.locale + "/getMenu" : "/getMenu";
                        $.ajax({
                            url: s,
                            method: "get",
                            success: function(s) {
                                $(".mobile-menu-btn-wrap").after(s), t(), o(e)
                            }
                        })
                    }(e) : o(e)
                }), document.getElementById("slider-pips2") && $(".btn-shop").click(function() {
                    t()
                }), $(".swipebox").length > 0 && $(".swipebox").swipebox(), $(".all-games-menu").length > 0) {
                var s = $(".all-games-menu").height();
                $(".page-all-games").css("min-height", s + 100)
            }
        })
    },
    6: function(e, t) {
        $(".product-list-mobile.mobile").length > 0 && $(".product-list-mobile.mobile").slick({
            slidesToShow: 300,
            dots: !1,
            variableWidth: !1,
            responsive: [{
                breakpoint: 1263,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 540,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    variableWidth: !0
                }
            }]
        })
    },
    95: function(e, t, o) {
        o(0), o(6), o(96), e.exports = o(97)
    },
    96: function(e, t) {
        $(".products-slider").length > 0 && $(".products-slider").slick({
            arrows: !0,
            dots: !1,
            slidesToShow: 4,
            infinite: !1,
            responsive: [{
                breakpoint: 1263,
                settings: {
                    slidesToShow: 6
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 540,
                settings: {
                    slidesToShow: 3,
                    variableWidth: !0
                }
            }]
        })
    },
    97: function(e, t) {
        $(document).ready(function() {
            var e = 0;

            function t(t) {
                var o = $("#recommended").data("ajax"),
                    s = parseInt($("#recommended").data("limit"));
                t || (t = $("#recommended .product-item").length / s + 1), $.ajax({
                    url: o,
                    data: {
                        page: t,
                        type: e
                    },
                    dataType: "json",
                    method: "get",
                    success: function(e) {
                        1 == t ? $("#recommended .product-list").html(e.html) : $("#recommended .product-list").append(e.html), e.isMore ? ($("#recommended .product-list").removeClass("no-after"), $("#recommended .btn-load").show()) : ($("#recommended .btn-load").hide(), $("#recommended .product-list").addClass("no-after"))
                    }
                })
            }
            $("#recommended").on("click", ".btn-load", function(e) {
                e.preventDefault(), t()
            }), $("#recommended").on("click", ".tabs-btns > a", function(o) {
                o.preventDefault(), e = $(this).data("type"), t(1), $(".tabs-btns a").removeClass("active"), $(this).addClass("active")
            })
        })
    }
});