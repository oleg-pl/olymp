export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        const old_head = html.head[0].split('\n');
        html.head = [old_head[0] + old_head[1] + old_head[2] + '<link href="/favicon.ico" rel="icon"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@600;700&display=swap" rel="stylesheet"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"><link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"><link href="/lib/animate/animate.min.css" rel="stylesheet"><link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"><link href="/css/bootstrap.min.css" rel="stylesheet"><link href="/css/style.css" rel="stylesheet"><link rel="stylesheet" href="/css/templatemo-plot-listing.css"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">'];
        const old_body = html.body[0];
        html.body = [old_body.slice(17, -6).replaceAll(/<!--(.*?)-->/g, '')];
        html.bodyAppend = [' <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script><script src="/lib/wow/wow.min.js"></script><script src="/lib/easing/easing.min.js"></script><script src="/lib/waypoints/waypoints.min.js"></script><script src="/lib/owlcarousel/owl.carousel.min.js"></script><script src="/js/main.js"></script>'];
    });
});