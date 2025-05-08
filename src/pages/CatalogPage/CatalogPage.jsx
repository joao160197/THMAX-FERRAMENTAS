import { useEffect, useState } from 'react';
import { client } from '../../services/prismic';

const CatalogPage = () => {
  const [catalogItems, setCatalogItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const exampleData = [
      {
        id: 1,
        data: {
          title: "Serra Circular 7\"",
          description: "Serra circular de alta performance para corte em madeira.",
          category: "Serras",
          image: { url: "https://via.placeholder.com/300x200?text=Serra+1", alt: "Serra Circular 7\"" }
        }
      },
      {
        id: 2,
        data: {
          title: "Serra Tico-Tico",
          description: "Ideal para cortes detalhados em madeira e metal.",
          category: "Serras",
          image: { url: "https://via.placeholder.com/300x200?text=Serra+2", alt: "Serra Tico-Tico" }
        }
      },
      {
        id: 3,
        data: {
          title: "Serra de Sabre",
          description: "Serra de sabre com excelente desempenho em cortes rápidos.",
          category: "Serras",
          image: { url: "https://via.placeholder.com/300x200?text=Serra+3", alt: "Serra de Sabre" }
        }
      },
      {
        id: 4,
        data: {
          title: "Grampo G",
          description: "Grampo de alta resistência para fixação de peças.",
          category: "Grampos",
          image: { url: "https://via.placeholder.com/300x200?text=Grampo+1", alt: "Grampo G" }
        }
      },
      {
        id: 5,
        data: {
          title: "Grampo de Canto",
          description: "Grampo de canto para trabalhos de acabamento em móveis.",
          category: "Grampos",
          image: { url: "https://via.placeholder.com/300x200?text=Grampo+2", alt: "Grampo de Canto" }
        }
      },
      {
        id: 6,
        data: {
          title: "Grampo Rápido",
          description: "Grampo rápido para fixação de peças em madeira e metal.",
          category: "Grampos",
          image: { url: "https://via.placeholder.com/300x200?text=Grampo+3", alt: "Grampo Rápido" }
        }
      },
      {
        id: 7,
        data: {
          title: "Fresa OSG 5mm",
          description: "Fresa de precisão para usinagem de metais.",
          category: "OSG",
          image: { url: "https://via.placeholder.com/300x200?text=OSG+1", alt: "Fresa OSG 5mm" }
        }
      },
      {
        id: 8,
        data: {
          title: "Broca OSG 8mm",
          description: "Broca de alta durabilidade para perfuração em aço.",
          category: "OSG",
          image: { url: "https://via.placeholder.com/300x200?text=OSG+2", alt: "Broca OSG 8mm" }
        }
      },
      {
        id: 9,
        data: {
          title: "Fresa OSG 10mm",
          description: "Fresa OSG para cortes de alta velocidade em metais.",
          category: "OSG",
          image: { url: "https://via.placeholder.com/300x200?text=OSG+3", alt: "Fresa OSG 10mm" }
        }
      },
      {
        id: 10,
        data: {
          title: "Broca de Aço 6mm",
          description: "Broca de aço rápida para perfuração em materiais diversos.",
          category: "Brocas",
          image: { url: "https://via.placeholder.com/300x200?text=Broca+1", alt: "Broca de Aço 6mm" }
        }
      },
      {
        id: 11,
        data: {
          title: "Broca de Impacto 10mm",
          description: "Broca de impacto para perfuração em concreto e alvenaria.",
          category: "Brocas",
          image: { url: "https://via.placeholder.com/300x200?text=Broca+2", alt: "Broca de Impacto 10mm" }
        }
      },
      {
        id: 12,
        data: {
          title: "Broca Longa 12mm",
          description: "Broca longa para perfuração profunda em madeira e plástico.",
          category: "Brocas",
          image: { url: "https://via.placeholder.com/300x200?text=Broca+3", alt: "Broca Longa 12mm" }
        }
      },
      {
        id: 13,
        data: {
          title: "Broca Cônica",
          description: "Broca cônica para criação de furos conicos em metal.",
          category: "Brocas Especiais",
          image: { url: "https://via.placeholder.com/300x200?text=Broca+Especial+1", alt: "Broca Cônica" }
        }
      },
      {
        id: 14,
        data: {
          title: "Broca para Vidro",
          description: "Broca especialmente desenvolvida para perfurar vidro.",
          category: "Brocas Especiais",
          image: { url: "https://via.placeholder.com/300x200?text=Broca+Especial+2", alt: "Broca para Vidro" }
        }
      },
      {
        id: 15,
        data: {
          title: "Broca Chata",
          description: "Broca chata ideal para perfurações em madeira de grande diâmetro.",
          category: "Brocas Especiais",
          image: { url: "https://via.placeholder.com/300x200?text=Broca+Especial+3", alt: "Broca Chata" }
        }
      },
      {
        id: 16,
        data: {
          title: "Kit de Chaves",
          description: "Kit de chaves para aperto e desaperto de parafusos e porcas.",
          category: "Variadas",
          image: { url: "https://via.placeholder.com/300x200?text=Variada+1", alt: "Kit de Chaves" }
        }
      },
      {
        id: 17,
        data: {
          title: "Lixa Abrasiva",
          description: "Lixa abrasiva de alta resistência para acabamento e polimento.",
          category: "Variadas",
          image: { url: "https://via.placeholder.com/300x200?text=Variada+2", alt: "Lixa Abrasiva" }
        }
      },
      {
        id: 18,
        data: {
          title: "Cinta de Carga",
          description: "Cinta de carga resistente para amarração de materiais pesados.",
          category: "Variadas",
          image: { url: "https://via.placeholder.com/300x200?text=Variada+3", alt: "Cinta de Carga" }
        }
      },
      {
        id: 19,
        data: {
          title: "Marca A",
          description: "Ferramentas e produtos da Marca A.",
          category: "Marcas",
          image: { url: "https://via.placeholder.com/300x200?text=Marca+1", alt: "Marca A" }
        }
      },
      {
        id: 20,
        data: {
          title: "Marca B",
          description: "Ferramentas e produtos da Marca B.",
          category: "Marcas",
          image: { url: "https://via.placeholder.com/300x200?text=Marca+2", alt: "Marca B" }
        }
      },
      {
        id: 21,
        data: {
          title: "Marca C",
          description: "Ferramentas e produtos da Marca C.",
          category: "Marcas",
          image: { url: "https://via.placeholder.com/300x200?text=Marca+3", alt: "Marca C" }
        }
      },
    ];

    setCatalogItems(exampleData);
  }, []);
  const categories = [
    'Serras',
    'Grampos',
    'OSG',
    'Brocas',
    'Brocas Especiais',
    'Variadas',
    'Marcas',
  ];

  const filteredItems = selectedCategory
    ? catalogItems.filter(item => item.data.category === selectedCategory)
    : catalogItems;

  return (
    <div className="flex">
      <div className="w-1/6 p-6 bg-gray-200">
        <h2 className="text-2xl font-bold mb-4">Categorias</h2>
        <div>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 mb-2 bg-white rounded border"
            value={selectedCategory || ""}
          >
            <option value="">Todas as Categorias</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-5/6 p-6">
        <h1 className="text-3xl font-bold mb-6">Catálogo</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{item.data.title}</h2>
              {item.data.image?.url && (
                <img src={item.data.image.url} alt={item.data.image.alt} className="mb-2" />
              )}
              <p>{item.data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;