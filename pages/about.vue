<template>
    <div class="about-page-wrapper">
        <Header />
        <OffCanvasMobileMenu />
        <PageTitle title="About Us" breadcrumbTitle="About" />
        <FeatureList />
        <AboutTwo />
        <BrandLogoSection />
        <TestimonialOne />
        <ContactDevider />
        <Footer />
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            PageTitle: () => import('@/components/PageTitle'),
            FeatureList: () => import('@/components/FeatureList'),
            AboutTwo: () => import('@/components/AboutTwo'),
            FunFactOne: () => import('@/components/FunFactOne'),
            TeamSection: () => import('@/components/TeamSection'),
            BrandLogoSection: () => import('@/components/BrandLogoSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        }
    }
</script>


