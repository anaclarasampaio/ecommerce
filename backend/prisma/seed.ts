import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categories = [
  { name: 'Smartphones', slug: 'smartphones' },
  { name: 'Notebooks', slug: 'notebooks' },
  { name: 'Fones de Ouvido', slug: 'fones-de-ouvido' },
  { name: 'Smartwatches', slug: 'smartwatches' },
  { name: 'Acessórios', slug: 'acessorios' },
];

const products = [
  // Smartphones
  {
    name: 'iPhone 15 Pro',
    description: 'Chip A17 Pro, câmera de 48 MP com zoom óptico 5x, titânio e Dynamic Island.',
    price: 9199.99,
    stock: 15,
    category: 'smartphones',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Tela Dynamic AMOLED 6,8", S Pen integrada, câmera de 200 MP e IA generativa.',
    price: 8499.99,
    stock: 12,
    category: 'smartphones',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'Motorola Edge 50 Pro',
    description: 'Snapdragon 7s Gen 2, câmera principal de 50 MP, carregamento turbo de 125W.',
    price: 3299.99,
    stock: 20,
    category: 'smartphones',
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'Xiaomi 14',
    description: 'Snapdragon 8 Gen 3, câmera Leica com sensor 1", carregamento de 90W.',
    price: 5299.99,
    stock: 8,
    category: 'smartphones',
    imageUrl: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&h=600&fit=crop&auto=format',
  },

  // Notebooks
  {
    name: 'MacBook Air M3',
    description: 'Chip Apple M3, tela Liquid Retina 13,6", 16 GB de RAM, bateria de até 18 horas.',
    price: 12999.99,
    stock: 7,
    category: 'notebooks',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'Dell XPS 15',
    description: 'Intel Core i7 13ª geração, OLED 4K, 32 GB RAM, RTX 4060, SSD de 1 TB.',
    price: 11499.99,
    stock: 5,
    category: 'notebooks',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'Samsung Galaxy Book4 Pro',
    description: 'Intel Core Ultra 7, AMOLED 16" 3K, 16 GB RAM, integração com Galaxy AI.',
    price: 8799.99,
    stock: 6,
    category: 'notebooks',
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop&auto=format',
  },

  // Fones de Ouvido
  {
    name: 'Sony WH-1000XM5',
    description: 'Cancelamento de ruído líder do setor, 30h de bateria, qualidade de som Hi-Res.',
    price: 2199.99,
    stock: 18,
    category: 'fones-de-ouvido',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'AirPods Pro 2',
    description: 'Cancelamento ativo de ruído, áudio espacial personalizado, chip H2.',
    price: 1899.99,
    stock: 22,
    category: 'fones-de-ouvido',
    imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'JBL Tune 770NC',
    description: 'Cancelamento de ruído adaptativo, 70h de bateria, dobráveis e leves.',
    price: 699.99,
    stock: 30,
    category: 'fones-de-ouvido',
    imageUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'Samsung Galaxy Buds3 Pro',
    description: 'ANC inteligente, som Hi-Fi com SSC Ultra, design ergonômico intra-auricular.',
    price: 1299.99,
    stock: 14,
    category: 'fones-de-ouvido',
    imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop&auto=format',
  },

  // Smartwatches
  {
    name: 'Apple Watch Series 10',
    description: 'Tela maior e mais fina, detecção de apneia do sono, carregamento rápido.',
    price: 4299.99,
    stock: 10,
    category: 'smartwatches',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'Samsung Galaxy Watch7',
    description: 'Exynos W1000, análise avançada de sono, monitor de glicose energética.',
    price: 2199.99,
    stock: 9,
    category: 'smartwatches',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'Garmin Forerunner 965',
    description: 'GPS multifrequência, mapas coloridos, métricas avançadas de treino.',
    price: 3799.99,
    stock: 6,
    category: 'smartwatches',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&auto=format',
  },

  // Acessórios
  {
    name: 'Logitech MX Master 3S',
    description: 'Mouse sem fio 8K DPI, scroll MagSpeed silencioso, conexão multi-device.',
    price: 699.99,
    stock: 25,
    category: 'acessorios',
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&auto=format',
  },
  {
    name: 'Keychron K2 Pro',
    description: 'Teclado mecânico sem fio, hot-swap, switches Red, retroiluminação RGB.',
    price: 899.99,
    stock: 13,
    category: 'acessorios',
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop&auto=format',
  },
];

async function main() {
  console.log('Limpando dados anteriores...');
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log('Criando categorias...');
  const createdCategories = await Promise.all(
    categories.map((c) => prisma.category.create({ data: c })),
  );

  const categoryMap = Object.fromEntries(createdCategories.map((c) => [c.slug, c.id]));

  console.log('Criando produtos...');
  for (const p of products) {
    await prisma.product.create({
      data: {
        name: p.name,
        description: p.description,
        price: p.price,
        stock: p.stock,
        imageUrl: p.imageUrl,
        categoryId: categoryMap[p.category],
      },
    });
  }

  console.log(`✅ ${products.length} produtos criados em ${categories.length} categorias.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
