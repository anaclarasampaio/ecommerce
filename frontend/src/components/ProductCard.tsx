import { Product } from '../types';

interface Props {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: Props) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer"
    >
      <div className="aspect-square bg-gray-100 overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl">
            🛍️
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <span className="text-xs text-primary-600 font-medium uppercase tracking-wide">
          {product.category.name}
        </span>
        <h3 className="mt-1 font-semibold text-gray-900 dark:text-white line-clamp-2 text-sm sm:text-base">{product.name}</h3>
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            {Number(product.price).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full self-start sm:self-auto ${
              product.stock > 0
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {product.stock > 0 ? 'Em estoque' : 'Esgotado'}
          </span>
        </div>
      </div>
    </div>
  );
}
