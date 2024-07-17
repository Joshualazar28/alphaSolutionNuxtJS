<template>
    <section class="portfolio-area portfolio-default-area">
        <div class="container pb-sm-50 pb-xl-70 pb-120">
            <div class="row align-items-center" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-sm-8">
                    <div class="section-title xs-text-center">
                        <div class="subtitle-content xs-d-i-flex">
                            <img src="/images/shape/line1.png" alt="Virtuf-HasTech">
                            <h5>Portfolio</h5>
                        </div>
                        <h2 class="title">We Have Leadership Strong Experience In <span>Business.</span></h2>
                    </div>
                </div>
                <div class="col-sm-4 text-right">
                    <nuxt-link to="/project" class="btn btn-theme btn-border btn-theme-color2 xs-d-none">All Projects <i class="icon icofont-long-arrow-right"></i></nuxt-link>
                </div>
            </div>
        </div>
        <div class="container custom-container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="portfolio-slider-content" data-aos="fade-up" data-aos-duration="1000">
                        <div class="swiper-container portfolio-slider-container">
                            <swiper
                                :speed="1000"
                                :space-between="30"
                                :centered-slides="true"
                                :breakpoints="portfolioSliderContainer.breakpoints"
                                :loop="true"
                            >
                                <swiper-slide class="portfolio-item">
                                    <div class="inner-content">
                                        <div class="thumb" :style="{ backgroundImage: `url('/images/portfolio/callcenter2.jpg')` }">
                                            <nuxt-link to="/project-details"></nuxt-link>
                                        </div>
                                        <div class="portfolio-info">
                                            <div class="content">
                                                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                                                <h3 class="title">
                                                    <nuxt-link to="/project-details">Market Statics & Analysis.</nuxt-link>
                                                </h3>
                                                <nuxt-link to="/project-details" class="category">Business / Marketing</nuxt-link>
                                            </div>
                                            <nuxt-link to="/project-details" class="btn btn-theme btn-border btn-portfolio">View Details <i class="icon icofont-long-arrow-right"></i></nuxt-link>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="portfolio-item">
                                    <div class="inner-content">
                                        <div class="thumb" :style="{ backgroundImage: `url('/images/portfolio/callcenter3.jpg')` }">
                                            <nuxt-link to="/project-details"></nuxt-link>
                                        </div>
                                        <div class="portfolio-info">
                                            <div class="content">
                                                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                                                <h3 class="title">
                                                    <nuxt-link to="/project-details">Market Statics & Analysis.</nuxt-link>
                                                </h3>
                                                <nuxt-link to="/project-details" class="category">Business / Marketing</nuxt-link>
                                            </div>
                                            <nuxt-link to="/project-details" class="btn btn-theme btn-border btn-portfolio">View Details <i class="icon icofont-long-arrow-right"></i></nuxt-link>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="portfolio-item">
                                    <div class="inner-content">
                                        <div class="thumb" :style="{ backgroundImage: `url('/images/portfolio/callcenter1.jpg')` }">
                                            <nuxt-link to="/project-details"></nuxt-link>
                                        </div>
                                        <div class="portfolio-info">
                                            <div class="content">
                                                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                                                <h3 class="title">
                                                    <nuxt-link to="/project-details">Market Statics & Analysis.</nuxt-link>
                                                </h3>
                                                <nuxt-link to="/project-details" class="category">Business / Marketing</nuxt-link>
                                            </div>
                                            <nuxt-link to="/project-details" class="btn btn-theme btn-border btn-portfolio">View Details <i class="icon icofont-long-arrow-right"></i></nuxt-link>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                portfolioSliderContainer: {
                    breakpoints: {
                        1800:{
                            slidesPerView: 3,
                            spaceBetween : 50
                        },
                        1400:{
                            slidesPerView: 3,
                            slidesPerGroup : 1,
                            spaceBetween : 30
                        },

                        992:{
                            slidesPerView : 3
                        },

                        768:{
                            slidesPerView : 2,
                            centeredSlides: false
                        },

                        0:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        },
    };
</script>