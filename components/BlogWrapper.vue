<template>
  <section class="blog-grid-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="blog-content-column">
            <div class="blog-content-area post-items-style2">
              <!--== Start Blog Post Item ==-->
              <div
                class="post-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                v-for="(blog, index) in blogs"
                :key="index"
              >
                <div class="thumb">
                  <nuxt-link to="/blog-details">
                    <img :src="blog.imgSrc" :alt="blog.title" />
                  </nuxt-link>
                </div>
                <div class="content">
                  <h4 class="title">
                    <nuxt-link to="/blog-details">{{ blog.title }}</nuxt-link>
                  </h4>
                  <div class="separator-line">
                    <img
                      class="me-1"
                      src="/images/shape/line-s2.png"
                      alt="shape"
                    />
                    <img src="/images/shape/line-s1.png" alt="shape" />
                  </div>
                  <p>{{ blog.excerpt }}</p>
                  <nuxt-link
                    to="/blog-details"
                    class="btn btn-theme btn-border btn-gray"
                    >Read More <i class="icon icofont-long-arrow-right"></i
                  ></nuxt-link>
                </div>
              </div>
              <!--== End Blog Post Item ==-->

          
            </div>

            <div class="sidebar-area">
              <ServiceCategoryWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Pagination: () => import("@/components/Pagination"),
    WidgetSearch: () => import("@/components/WidgetSearch"),
    ServiceCategoryWidget: () => import("@/components/ServiceCategoryWidget"),
    WidgetVideo: () => import("@/components/WidgetVideo"),
    WidgetSocial: () => import("@/components/WidgetSocial"),
    WidgetRecentPost: () => import("@/components/WidgetRecentPost"),
    WidgetTags: () => import("@/components/WidgetTags"),
  },

  data() {
    return {
      blogs: [
        {
          imgSrc: "/images/blog/blog1.jpg",
          title: "Enhancing Customer Satisfaction in CSR: Key Strategies for Success",
          excerpt:
            "Customer satisfaction is a crucial element in the realm of Corporate Social Responsibility (CSR). Companies that prioritize customer satisfaction in their CSR initiatives not only build a loyal customer base but also foster a positive brand image. This blog explores the significance of customer satisfaction in CSR and outlines effective strategies for businesses to achieve it.",
          date: "21 March, 2021",
          comment: 2566,
          like: 750,
          author: "Alvin Malone",
          category: "Business/Marketing",
        },
      ],
    };
  },
};
</script>
