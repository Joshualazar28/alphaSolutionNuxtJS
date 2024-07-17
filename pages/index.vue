<template>
    <div class="main-container">
        <Header />
        <OffCanvasMobileMenu />
        <HeroSlider />
        <AboutOne />
        <ServiceOne />
        <FaqOne />
        <TestimonialOne />
        <BrandLogoSection />
        <BlogSection />
        <ContactDevider />
        <Footer />
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroSlider: () => import('@/components/HeroSlider'),
            AboutOne: () => import('@/components/AboutOne'),
            FunFactOne: () => import('@/components/FunFactOne'),
            ServiceOne: () => import('@/components/ServiceOne'),
            FaqOne: () => import('@/components/FaqOne'),
            TeamSection: () => import('@/components/TeamSection'),
            PortfolioSection: () => import('@/components/PortfolioSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            BrandLogoSection: () => import('@/components/BrandLogoSection'),
            BlogSection: () => import('@/components/BlogSection'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        }
    };
</script>


