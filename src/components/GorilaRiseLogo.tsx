
interface GorilaRiseLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const GorilaRiseLogo = ({ size = 'md', className = '' }: GorilaRiseLogoProps) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const isWhiteText = className.includes('text-white');

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} rounded-lg p-2 shadow-sm`} style={{ backgroundColor: '#231f20' }}>
        <img 
          src="/lovable-uploads/b1d0c406-fb12-494e-ad8c-a0ad4760dda0.png" 
          alt="Gorila Rise Studio" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-left">
        <h3 className={`font-bold text-lg ${isWhiteText ? 'text-white' : 'text-gorila-primary'}`}>
          Gorila Rise
        </h3>
        <p className={`text-sm ${isWhiteText ? 'text-gorila-yellow' : 'text-gray-600'}`}>
          Studio
        </p>
      </div>
    </div>
  );
};

export default GorilaRiseLogo;
