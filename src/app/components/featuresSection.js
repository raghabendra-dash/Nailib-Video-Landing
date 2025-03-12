export default function FeaturesSection({ features }) {
  
  return (
    <div className="features-section container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="feature-card text-center p-6 bg-white shadow-lg rounded-lg">
            <img src={feature.icon} alt={feature.title} className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}