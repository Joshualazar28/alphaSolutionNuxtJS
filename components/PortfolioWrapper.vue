<template>
    <section class="portfolio-area">
        <div class="container">
            <div class="row portfolio-grid gutter-50" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-md-6 portfolio-item" :class="portfolio.category" v-for="(portfolio, index) in portfolios" :key="index">
                    <div class="inner-content">
                        <div class="thumb">
                            <nuxt-link to="/project-details">
                                <img :src="portfolio.imgSrc" :alt="portfolio.title"/>
                            </nuxt-link>
                        </div>
                        <div class="portfolio-info">
                            <div class="content">
                                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="shape image">
                                <h3 class="title">
                                    <nuxt-link to="/project-details">{{ portfolio.title }}</nuxt-link>
                                </h3>
                                <nuxt-link to="/project-details" class="category">{{ portfolio.category }}</nuxt-link>
                            </div>
                            <nuxt-link to="/project-details" class="btn-icon">
                                <i class="icofont-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolio-footer text-center" data-aos="fade-up" data-aos-duration="1300">
                <button class="btn btn-theme btn-lg mb-1" @click="loadMore" v-if="currentItem < portfolioData.length">Load More</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                currentItem: 4,

                portfolioData: [
                    {
                        imgSrc: "/images/portfolio/1.jpg",
                        title: "Business Management",
                        category: "business"
                    },
                    {
                        imgSrc: "/images/portfolio/2.jpg",
                        title: "Market Statics & Analysis.",
                        category: "marketing"
                    },
                    {
                        imgSrc: "/images/portfolio/3.jpg",
                        title: "Digital Marketing",
                        category: "consulting"
                    },
                    {
                        imgSrc: "/images/portfolio/4.jpg",
                        title: "Business Consultation",
                        category: "digital"
                    },
                    {
                        imgSrc: "/images/portfolio/5.jpg",
                        title: "Link Building Services",
                        category: "business"
                    },
                    {
                        imgSrc: "/images/portfolio/6.jpg",
                        title: "Social Media Marketing",
                        category: "marketing"
                    },
                ]
            }
        },
        computed: {
            portfolios() {
                return this.portfolioData.slice(0, this.currentItem);
            },
        },

        methods: {
            loadMore() {
                this.currentItem += 2;
            },
        },
    };
</script>