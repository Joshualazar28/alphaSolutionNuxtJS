<template>
    <footer class="footer-area bg-img-cover" :style="{ backgroundImage: `url('/images/photos/bg-footer.jpg')` }">
        <div class="container" data-aos="fade-up" data-aos-duration="1000">
            <div class="row">
                <div class="col-md-9 col-lg-4 col-xl-4">
                    <div class="widget-item mt-0">
                        <div class="about-widget">
                            <nuxt-link to="/" class="footer-logo">
                                <img src="/images/logo/logo.png" alt="Logo">
                            </nuxt-link>
                            <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has industry's standard dummy text ever printer took a galley.</p>
                            <div class="widget-newsletter">
                                <form>
                                    <input type="email" class="form-control" placeholder="Enter your email">
                                    <button type="submit" class="btn btn-theme">
                                        Subscribe Now <i class="icon icofont-long-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-4 col-xl-4">
                    <div class="widget-item menu-wrap-two-column">
                        <h4 class="widget-title">All Services</h4>
                        <img class="line-shape" src="/images/shape/line-s1.png" alt="shape">
                        <nav class="widget-menu-wrap">
                            <div class="row">
                                <div>
                                    <ul class="nav-menu nav">
                                        <li><nuxt-link to="/service-details">Customer Retention</nuxt-link></li>
                                        <li><nuxt-link to="/service-details">Outbound Requests</nuxt-link></li>
                                        <li><nuxt-link to="/service-details">Inbound Requests</nuxt-link></li>
                                        <li><nuxt-link to="/service-details">Customer Support</nuxt-link></li>
                                        <li><nuxt-link to="/service-details">Billing and Payment</nuxt-link></li>
                                        <li><nuxt-link to="/service-details">Live Chat Support</nuxt-link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 lg-pr-0">
                    <div class="widget-item menu-wrap-column">
                        <h4 class="widget-title">Useful Links</h4>
                        <img class="line-shape" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                        <nav class="widget-menu-wrap">
                             <ul class="nav-menu nav">
                                <li><nuxt-link to="/">Home</nuxt-link></li>
                                <li><nuxt-link to="/about">About Us</nuxt-link></li>
                                <li><nuxt-link to="/service">Service</nuxt-link></li>
                                <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                                <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="row align-items-center">
                        <div class="col-md-6 order-2 order-md-1">
                            <div class="widget-copyright">
                                <p>© 2023 Made By <span>Dexter Matthew</span></p>
                            </div>
                        </div>
                        <div class="col-md-6 order-1 order-md-2">
                            <div class="widget-social-icons">
                                <a href="#"><i class="icofont-facebook"></i></a>
                                <a href="#"><i class="icofont-skype"></i></a>
                                <a href="#"><i class="icofont-instagram"></i></a>
                                <a href="#"><i class="icofont-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    };
</script>