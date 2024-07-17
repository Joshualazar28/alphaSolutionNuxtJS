<template>
    <div class="contact-page-wrapper">
        <Header />
        <OffCanvasMobileMenu />
        <PageTitle title="Contact Us" breadcrumbTitle="Contact" />
        <ContactWrapper />
        <FooterTwo />
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            PageTitle: () => import('@/components/PageTitle'),
            ContactWrapper: () => import('@/components/ContactWrapper'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },
    };
</script>


