import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

function NewProducts() {
  const { fetchDataBackend } = useFetch();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerRecientes = async () => {
      const respuesta = await fetchDataBackend("producto/recientes", "GET");
      if (respuesta?.status === 200) {
        setProductos(respuesta.data);
      }
    };

    obtenerRecientes();
  }, []);

if (productos.length === 0) {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-xl mx-auto text-center bg-orange-100 border border-orange-200 text-orange-700 px-6 py-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-orange-400 mb-2 uppercase">Sin productos</h2>
        <p className="text-md text-orange-500 font-medium">
          Actualmente no hay productos disponibles en esta sección.
        </p>
        <p className="text-sm text-orange-400 mt-2">
          ¡Vuelve pronto para descubrir nuevas telas y diseños únicos!
        </p>
      </div>
    </section>
  );
}


  return (
    <section className="py-12 px-6 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-orange-300 mb-12 text-center uppercase tracking-wide">
          Novedades
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map((producto) => (
            <div
              key={producto._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={producto.imagenUrl}
                alt={producto.nombre}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                  <h3 className="text-xl font-bold text-orange-300">{producto.nombre}</h3>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-3">{producto.descripcion}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-400">${producto.precio}</span>
                  <button className="bg-orange-300 text-white px-4 py-1.5 rounded-full font-medium hover:bg-orange-400 transition">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/productos"
            className="inline-block bg-orange-300 text-white px-8 py-3 rounded-full hover:bg-orange-400 transition font-semibold uppercase tracking-wide shadow-md"
          >
            Ver todos los productos
          </a>
        </div>
      </div>
    </section>
  );
}

export default NewProducts;
