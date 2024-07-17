<template>
    <section class="blog-area blog-default-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 m-auto">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h2 class="title">News Of Company</h2>
                        <div class="separator-line mt-14">
                            <img class="me-1" src="/images/shape/line-s2.png" alt="image">
                            <img src="/images/shape/line-s1.png" alt="image">
                        </div>
                        <div class="desc">
                            <p class="mt-21">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the printer took</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row " data-aos="fade-up" data-aos-duration="1100">
                <div class="col-md-6 col-lg-4" v-for="(blog, index) in blogs" :key="index">
                    <div class="post-item mb-md-50">
                        <div class="thumb">
                            <nuxt-link to="/blog-details">
                                <img :src="blog.imgSrc" :alt="blog.title">
                            </nuxt-link>
                            <div class="meta">
                                <nuxt-link to="/blog" class="post-date">{{ blog.date }}</nuxt-link>
                                <button class="post-comment"><i class="icofont-speech-comments"></i> {{ blog.comment }}</button>
                                <button class="post-like"><i class="icofont-heart"></i>{{ blog.like }}</button>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title">
                                <nuxt-link to="/blog-details">{{ blog.title }}</nuxt-link>
                            </h4>
                            <p>{{ blog.excerpt }}</p>
                            <nuxt-link to="/blog-details" class="btn btn-theme btn-border btn-gray">
                                Read More <i class="icon icofont-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                blogs: [
                    {
                        id: 101,
                        imgSrc: "/images/blog/blog1.jpg",
                        title: "Enhancing Customer Satisfaction in CSR:",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
                        date: "21 March, 2021",
                        comment: 2566,
                        like: 750,
                        category: "Business/Marketing"
                    },
                    {
                        id: 102,
                        imgSrc: "/images/blog/conpany2.jpg",
                        title: "Alway make the client upto date with our Service Provider Team.",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
                        date: "17 June, 2021",
                        comment: 3345,
                        like: 980,
                        category: "Development/Design"
                    },
                    {
                        id: 103,
                        imgSrc: "/images/blog/company3.jpg",
                        title: "We help our client and make them happy.",
                        excerpt: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard printer.",
                        date: "28 May, 2021",
                        comment: 1450,
                        like: 380,
                        category: "Fashion/Style"
                    },
                ]
            }
        },
    };
</script>
