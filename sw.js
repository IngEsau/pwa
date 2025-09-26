self.addEventListener(
    'fetch',
    function(evento){
        console.log(evento.request.url);
        if(/\.jpg$/.test(evento.request.url)){
            evento.respondWith(fetch('unicorn.jpg'));
        }
        else if(/\.png$/.test(evento.request.url)){
            evento.respondWith(fetch('utp.png'));
        }
    }
)