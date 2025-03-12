export default function HowItWorks({ steps }) {
  
  return (
    <div className="how-it-works container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.step} className="step text-center">
            <h3 className="text-2xl font-bold mb-2">
              Step {step.step}: {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}