export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    imageSrc: string;
  };
  
  export const products: Product[] = [
    {
      id: 1,
      title: "PlayStation 5",
      description: 'Consola de última generación con SSD ultrarrápido',
      category: "Consola",
      price: 699990,
      imageSrc: "../public/img/ps5.png",
    },
    {
      id: 2,
      title: "Xbox Series X",
      description: "La consola más potente de Microsoft con 1 TB SSD y 4K nativo",
      category: "Consola",
      price: 649990,
      imageSrc: "/img/Xbox Series X.jpg",
    },
    {
      id: 3,
      title: "Nintendo Switch OLED",
      description: "Versión con pantalla OLED vibrante y dock mejorado",
      category: "Consola",
      price: 379990,
      imageSrc: "/img/Nintendo Switch OLED.jpg",
    },
    {
      id: 4,
      title: "PC Gamer ASUS ROG Strix",
      description: "Potencia extrema para gaming competitivo y multitarea.",
      category: "PC Gamer",
      price: 2699990,
      imageSrc: "/img/PC_Gamer_ASUS_ROG_Strix.png",
    },
    {
      id: 5,
      title: "MSI Trident X",
      description: "Compacta pero poderosa, con RTX 4070 Ti y refrigeración líquida.",
      category: "PC Gamer",
      price: 2500000,
      imageSrc: "/img/MSI Trident X.png",
    },
    {
      id: 6,
      title: "HP Omen Obelisk",
      description: "Diseño sobrio y rendimiento de alta gama para eSports.",
      category: "PC Gamer",
      price: 2109990,
      imageSrc: "/img/HP Omen Obelisk.png",
    },
    {
      id: 7,
      title: "Mouse Logitech G502 HERO",
      description: "Sensor óptico HERO 25K con precisión y ajuste de peso.",
      category: "Periféricos",
      price: 75990,
      imageSrc: "/img/mouse gamer logitech.webp",
    },
    {
      id: 8,
      title: "Auriculares HyperX Cloud II",
      description: "Audio envolvente 7.1 con micrófono desmontable.",
      category: "Periféricos",
      price: 89990,
      imageSrc: "/img/Auriculares HyperX Cloud II.png",
    },
    {
      id: 9,
      title: "Controlador Xbox Series X",
      description: "Diseño ergonómico con respuesta háptica mejorada.",
      category: "Periféricos",
      price: 89990,
      imageSrc: "/img/Controlador Xbox Series X.png",
    },
    {
      id: 10,
      title: "Mousepad Razer Goliathus Extended",
      description: "Superficie RGB con iluminación personalizable.",
      category: "Accesorios",
      price: 99900,
      imageSrc: "/img/Mousepad Razer Goliathus Extended.jpg",
    },
    {
      id: 11,
      title: "Silla Gamer Secretlab Titan",
      description: "Comodidad premium con soporte lumbar ajustable.",
      category: "Accesorios",
      price: 549990,
      imageSrc: "/img/Silla Gamer Secretlab Titan.png",
    },
    {
      id: 12,
      title: "Polera Gamer Level-Up",
      description: "Personalízala con tu gamer tag o diseño favorito.",
      category: "Accesorios",
      price: 41990,
      imageSrc: "/img/polera_level_up.webp",
    },
    {
      id: 13,
      title: "Catan",
      description: "Estrategia y comercio para dominar la isla.",
      category: "Juegos de Mesa",
      price: 34990,
      imageSrc: "/img/catan.avif",
    },
    {
      id: 14,
      title: "Carcassonne",
      description: "Construye ciudades y caminos medievales con tus amigos.",
      category: "Juegos de Mesa",
      price: 29990,
      imageSrc: "/img/carcassonne juego de mesa.jpg",
    },
  ];