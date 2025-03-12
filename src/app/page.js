import HeroSection from './components/heroSection';
import FeaturesSection from './components/featuresSection';
import HowItWorks from './components/howworks';
import CTA from './components/CTA';

export default function Home() {
  const heroProps = {
    title: 'Welcome to Nailib Videos',
    subtitle: 'Your ultimate resource for IB success.',
  };

  const features = [
    {
      title: 'Comprehensive IB Coverage',
      description: 'Access videos for all IB subjects and topics.',
      icon: '/file.svg',
    },
    {
      title: 'Expert-Led Tutorials',
      description: 'Learn from experienced IB educators.',
      icon: '/globe.svg',
    },
    {
      title: 'On-Demand Access',
      description: 'Watch videos anytime, anywhere.',
      icon: '/next.svg',
    },
    {
      title: 'Interactive Quizzes',
      description: 'Test your knowledge after each video.',
      icon: '/vercel.svg',
    },
  ];

  const steps = [
    {
      step: 1,
      title: 'Sign Up',
      description: 'Create your free account in seconds.',
    },
    {
      step: 2,
      title: 'Browse Videos',
      description: 'Explore our library of IB video resources.',
    },
    {
      step: 3,
      title: 'Start Learning',
      description: 'Watch videos and take quizzes to master IB topics.',
    },
  ];

  return (
    <div>
      <HeroSection {...heroProps} />
      <FeaturesSection features={features} />
      <HowItWorks steps={steps} />
      <CTA />
    </div>
  );
}