<template>
    <div class="portfolio-page-wrapper">
        <Header />
        <OffCanvasMobileMenu />
        <PageTitle title="Projects" breadcrumbTitle="Projects" />
        <PortfolioWrapper />
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
            PortfolioWrapper: () => import('@/components/PortfolioWrapper'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        }
    }
</script>


