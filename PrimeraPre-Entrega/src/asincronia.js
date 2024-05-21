const productos =
  [
    {
      "imagen": "https://www.macstation.com.ar/img/productos/2765-pink-citrus-case-12-pro-max-rosa-citrico-funda1.jpg",
      "id": 1,
      "titulo": "Funda para iPhone 12",
      "stock": 15,
      "descripcion": "Funda de silicona para iPhone 12, disponible en varios colores.",
      "precio": 1500,
      "categoria": "electronica"
    },
    {
      "imagen": "https://www.shiftdigital.com.ar/images/Samsung%20Cargador%20USB%20Tipo%20C%2025W%20EP-TA800XWEGAR%201.jpg",
      "id": 2,
      "titulo": "Cargador Rápido USB-C",
      "stock": 30,
      "descripcion": "Cargador rápido de 20W compatible con la mayoría de dispositivos USB-C.",
      "precio": 2500,
      "categoria": "electronica"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_891602-MLA54931608302_042023-O.webp",
      "id": 3,
      "titulo": "Protector de Pantalla de Vidrio Templado",
      "stock": 50,
      "descripcion": "Protector de pantalla de vidrio templado para varios modelos de smartphones.",
      "precio": 800,
      "categoria": "electronica"
    },
    {
      "imagen": "https://www.megga.com.ar/img_fotos_productos/05081106_Flat.jpg",
      "id": 4,
      "titulo": "Soporte para Teléfono para Automóvil",
      "stock": 20,
      "descripcion": "Soporte magnético para teléfono, fácil de instalar en el auto.",
      "precio": 1200,
      "categoria": "electronica"
    },
    {
      "imagen": "https://www.sevenelectronics.com.ar/images/00000000SMW-SW6496478sevenelectronics-Smartwatch-Match100-1.png",
      "id": 5,
      "titulo": "Smartwatch con Monitor de Ritmo Cardíaco",
      "stock": 10,
      "descripcion": "Reloj inteligente con múltiples funciones, incluyendo monitoreo de ritmo cardíaco y notificaciones.",
      "precio": 5500,
      "categoria": "relojes"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_984647-MLA71000580513_082023-O.webp",
      "id": 6,
      "titulo": "Reloj Deportivo Resistente al Agua",
      "stock": 8,
      "descripcion": "Reloj deportivo ideal para actividades al aire libre, resistente al agua hasta 50 metros.",
      "precio": 3800,
      "categoria": "relojes"
    },
    {
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGXTGI_scp4615TdJYznRz3GN1yVmPCUb8Qut7X0w_Q&s",
      "id": 7,
      "titulo": "Vaso Térmico Stanley",
      "stock": 25,
      "descripcion": "Vaso térmico de acero inoxidable, mantiene bebidas calientes o frías por horas.",
      "precio": 4500,
      "categoria": "stanley"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_963234-MLA70394508816_072023-O.webp",
      "id": 8,
      "titulo": "Botella de Agua Stanley",
      "stock": 18,
      "descripcion": "Botella de agua de acero inoxidable, ideal para mantener la hidratación en todo momento.",
      "precio": 3000,
      "categoria": "stanley"
    },
    {
      "imagen": "https://images.fravega.com/f500/0aa254db4c45e365b7e46b0e98fc5155.jpg",
      "id": 9,
      "titulo": "Auriculares Inalámbricos Bluetooth",
      "stock": 40,
      "descripcion": "Auriculares inalámbricos con micrófono integrado y sonido de alta calidad.",
      "precio": 3200,
      "categoria": "electronica"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_661508-MLA73394846261_122023-O.webp",
      "id": 10,
      "titulo": "Power Bank 10,000mAh",
      "stock": 22,
      "descripcion": "Batería portátil de 10,000mAh para cargar tus dispositivos en cualquier lugar.",
      "precio": 2200,
      "categoria": "electronica"
    }
  ]




export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos)
  }, 2000)
})

export const getProduct = (id) => {
  return productos.find((prod) => prod.id == id)
}

export const getCategoria = (categoria) => {
  return productos.find((cate)=>cate.categoria == categoria)
}