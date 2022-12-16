const productos = [
    {
        id: 1,
        name: "Dolce Gabanna",
        precio:  420000,
        categoria: "mujer",
        path: "/img/locionUna.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget efficitur arcu. Sed posuere vulputate posuere. Donec a dapibus justo. Etiam gravida non mi mollis iaculis. Nullam cursus, diam sit amet sodales pulvinar, lectus odio sagittis leo, sed pellentesque nibh justo non sapien. Maecenas sed auctor orci. Sed vitae vulputate turpis. \
        Maecenas ullamcorper orci id faucibus interdum. Curabitur vehicula, tellus non iaculis dapibus, mi sapien finibus est, et vulputate risus est sit amet magna. Sed quis ullamcorper odio, at bibendum ex. Donec rutrum lectus nec turpis semper pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ut lacus elit. Morbi luctus finibus nibh, at aliquet ante vehicula sed. Vestibulum fermentum congue tristique. Nullam luctus luctus augue, sit amet vulputate quam.\
        Mauris viverra sapien ac dolor laoreet suscipit. Quisque diam lacus, consectetur vel arcu a, sollicitudin mollis nibh. Cras sodales orci ut feugiat dignissim. Quisque purus libero, condimentum ac eleifend ut, convallis sit amet ex. Pellentesque et leo vulputate, auctor est in, tincidunt diam. In tincidunt justo at mauris ornare commodo non eu purus. Curabitur ut odio fringilla, finibus elit nec, euismod nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non orci aliquam ligula volutpat vulputate hendrerit ac ipsum. Nullam sed ante pellentesque, tincidunt nulla nec, lobortis dolor. Vivamus ornare scelerisque mi, eu luctus ipsum condimentum in. Sed eget urna tempus elit pretium consectetur quis ut nisl. Praesent feugiat rhoncus augue, et eleifend eros. Nunc non tortor vel lacus posuere mollis nec quis ipsum."
    },
    {
        id: 2,
        name: "Must de Cartier",
        precio: 350000,
        categoria: "mujer",
        path: "/img/locionDos.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget efficitur arcu. Sed posuere vulputate posuere. Donec a dapibus justo. Etiam gravida non mi mollis iaculis. Nullam cursus, diam sit amet sodales pulvinar, lectus odio sagittis leo, sed pellentesque nibh justo non sapien. Maecenas sed auctor orci. Sed vitae vulputate turpis. \
        Maecenas ullamcorper orci id faucibus interdum. Curabitur vehicula, tellus non iaculis dapibus, mi sapien finibus est, et vulputate risus est sit amet magna. Sed quis ullamcorper odio, at bibendum ex. Donec rutrum lectus nec turpis semper pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ut lacus elit. Morbi luctus finibus nibh, at aliquet ante vehicula sed. Vestibulum fermentum congue tristique. Nullam luctus luctus augue, sit amet vulputate quam.\
        Mauris viverra sapien ac dolor laoreet suscipit. Quisque diam lacus, consectetur vel arcu a, sollicitudin mollis nibh. Cras sodales orci ut feugiat dignissim. Quisque purus libero, condimentum ac eleifend ut, convallis sit amet ex. Pellentesque et leo vulputate, auctor est in, tincidunt diam. In tincidunt justo at mauris ornare commodo non eu purus. Curabitur ut odio fringilla, finibus elit nec, euismod nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non orci aliquam ligula volutpat vulputate hendrerit ac ipsum. Nullam sed ante pellentesque, tincidunt nulla nec, lobortis dolor. Vivamus ornare scelerisque mi, eu luctus ipsum condimentum in. Sed eget urna tempus elit pretium consectetur quis ut nisl. Praesent feugiat rhoncus augue, et eleifend eros. Nunc non tortor vel lacus posuere mollis nec quis ipsum."
    },
    {
        id: 3,
        name: "Good girl",
        precio: 480000,
        categoria: "mujer",
        path: "/img/locionTres.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget efficitur arcu. Sed posuere vulputate posuere. Donec a dapibus justo. Etiam gravida non mi mollis iaculis. Nullam cursus, diam sit amet sodales pulvinar, lectus odio sagittis leo, sed pellentesque nibh justo non sapien. Maecenas sed auctor orci. Sed vitae vulputate turpis. \
        Maecenas ullamcorper orci id faucibus interdum. Curabitur vehicula, tellus non iaculis dapibus, mi sapien finibus est, et vulputate risus est sit amet magna. Sed quis ullamcorper odio, at bibendum ex. Donec rutrum lectus nec turpis semper pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ut lacus elit. Morbi luctus finibus nibh, at aliquet ante vehicula sed. Vestibulum fermentum congue tristique. Nullam luctus luctus augue, sit amet vulputate quam.\
        Mauris viverra sapien ac dolor laoreet suscipit. Quisque diam lacus, consectetur vel arcu a, sollicitudin mollis nibh. Cras sodales orci ut feugiat dignissim. Quisque purus libero, condimentum ac eleifend ut, convallis sit amet ex. Pellentesque et leo vulputate, auctor est in, tincidunt diam. In tincidunt justo at mauris ornare commodo non eu purus. Curabitur ut odio fringilla, finibus elit nec, euismod nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non orci aliquam ligula volutpat vulputate hendrerit ac ipsum. Nullam sed ante pellentesque, tincidunt nulla nec, lobortis dolor. Vivamus ornare scelerisque mi, eu luctus ipsum condimentum in. Sed eget urna tempus elit pretium consectetur quis ut nisl. Praesent feugiat rhoncus augue, et eleifend eros. Nunc non tortor vel lacus posuere mollis nec quis ipsum."
    },
    {
        id: 4,
        name: "Mont Blanc",
        precio: 610000,
        categoria: "hombre",
        path: "/img/locionCuatro.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget efficitur arcu. Sed posuere vulputate posuere. Donec a dapibus justo. Etiam gravida non mi mollis iaculis. Nullam cursus, diam sit amet sodales pulvinar, lectus odio sagittis leo, sed pellentesque nibh justo non sapien. Maecenas sed auctor orci. Sed vitae vulputate turpis. \
        Maecenas ullamcorper orci id faucibus interdum. Curabitur vehicula, tellus non iaculis dapibus, mi sapien finibus est, et vulputate risus est sit amet magna. Sed quis ullamcorper odio, at bibendum ex. Donec rutrum lectus nec turpis semper pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ut lacus elit. Morbi luctus finibus nibh, at aliquet ante vehicula sed. Vestibulum fermentum congue tristique. Nullam luctus luctus augue, sit amet vulputate quam.\
        Mauris viverra sapien ac dolor laoreet suscipit. Quisque diam lacus, consectetur vel arcu a, sollicitudin mollis nibh. Cras sodales orci ut feugiat dignissim. Quisque purus libero, condimentum ac eleifend ut, convallis sit amet ex. Pellentesque et leo vulputate, auctor est in, tincidunt diam. In tincidunt justo at mauris ornare commodo non eu purus. Curabitur ut odio fringilla, finibus elit nec, euismod nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non orci aliquam ligula volutpat vulputate hendrerit ac ipsum. Nullam sed ante pellentesque, tincidunt nulla nec, lobortis dolor. Vivamus ornare scelerisque mi, eu luctus ipsum condimentum in. Sed eget urna tempus elit pretium consectetur quis ut nisl. Praesent feugiat rhoncus augue, et eleifend eros. Nunc non tortor vel lacus posuere mollis nec quis ipsum."
    }
];

export default productos;