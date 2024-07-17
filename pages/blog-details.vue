<template>
    <div class="blog-page-wrapper">
        <Header />
        <OffCanvasMobileMenu />
        <PageTitle title="Key Strategies for Success" breadcrumbTitle="Blog" />
        <BlogDetailsWrapper />
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
            BlogDetailsWrapper: () => import('@/components/BlogDetailsWrapper'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        }
    };
</script>


