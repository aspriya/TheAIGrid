'use client';

import { CurrencyDollarIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import Card from '@/components/ui/Card';

const PricingSection = ({ isForSale, price, onToggleSale, onPriceChange, error }) => {
  const pricingTiers = [
    { value: 50, label: '$50 - Basic project or component' },
    { value: 100, label: '$100 - Small utility or tool' },
    { value: 250, label: '$250 - Medium complexity project' },
    { value: 500, label: '$500 - Advanced project with AI features' },
    { value: 1000, label: '$1,000 - Complex, production-ready solution' },
    { value: 2500, label: '$2,500+ - Enterprise-level project' }
  ];

  return (
    <Card className="p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Project Pricing</h2>
        <p className="text-gray-600">
          Are you looking to sell this project? Set a price if you want to monetize your work.
        </p>
      </div>

      <div className="space-y-6">
        {/* Toggle for Sale */}
        <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
          <div className="flex-shrink-0 pt-1">
            <input
              type="checkbox"
              id="isForSale"
              checked={isForSale}
              onChange={(e) => onToggleSale(e.target.checked)}
              className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="isForSale" className="text-base font-semibold text-gray-900 cursor-pointer">
              List this project for sale
            </label>
            <p className="text-sm text-gray-600 mt-1">
              Make your project available for purchase. Buyers can contact you directly to negotiate the sale.
            </p>
          </div>
          <CurrencyDollarIcon className="w-8 h-8 text-green-600" />
        </div>

        {/* Price Input (shown only if for sale) */}
        {isForSale && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Asking Price (USD) *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-lg">$</span>
                </div>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => onPriceChange(e.target.value)}
                  placeholder="0"
                  min="1"
                  className={`w-full pl-8 pr-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base text-gray-700 ${
                    error ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            {/* Pricing Suggestions */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Pricing Suggestions
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {pricingTiers.map(tier => (
                  <button
                    key={tier.value}
                    type="button"
                    onClick={() => onPriceChange(tier.value.toString())}
                    className={`text-left p-3 border rounded-lg transition-colors hover:bg-blue-50 hover:border-blue-300 ${
                      parseInt(price) === tier.value 
                        ? 'bg-blue-50 border-blue-300 text-blue-700' 
                        : 'border-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="font-medium text-sm">{tier.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex gap-3">
                <InformationCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-900">Pricing Tips</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Consider the complexity and time invested in your project</li>
                    <li>• Factor in the value it provides to potential buyers</li>
                    <li>• Research similar projects to find competitive pricing</li>
                    <li>• Remember that buyers may negotiate the final price</li>
                    <li>• Include documentation and support in your offering</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">What buyers typically expect:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Complete source code</li>
                <li>✓ Documentation and setup instructions</li>
                <li>✓ Basic support during integration</li>
                <li>✓ License for commercial use (if applicable)</li>
                <li>✓ Any necessary API keys or configuration guides</li>
              </ul>
            </div>
          </div>
        )}

        {/* Not for Sale Message */}
        {!isForSale && (
          <div className="text-center py-8 bg-gray-50 rounded-xl border border-gray-200">
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sharing for Community Value
              </h3>
              <p className="text-gray-600 text-sm">
                Your project will be showcased in the community gallery. 
                This is great for building your portfolio, getting feedback, 
                and potentially attracting collaborators or job opportunities.
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PricingSection;
