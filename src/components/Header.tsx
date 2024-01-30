import Image from 'next/image';
import React from 'react';

type HeaderProps = {
    // Define aquí las props si las necesitas
};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className=''>
            <h1 className="mb-6 center">Antera: Prevención y Estímulo del Crecimiento del Cabello</h1>
            <h3>¿Te preocupa la caída del cabello?</h3>
            <p>
                La caída del cabello es un problema que puede afectar tu autoestima y hacerte sentir inseguro/a. Además, puede ser un indicador de problemas de salud más graves. Si estás experimentando una caída excesiva del cabello, es importante tomar medidas para prevenirlo y mantener tu cabello sano y fuerte.
            </p>
            <p>
                ANTERA crecepelo es la solución perfecta para aquellos que buscan fortalecer y revitalizar su cabello.
            </p>
            <p>
                Formulado con ingredientes naturales de alta calidad, como el jengibre, la raíz de vellón, aceite de uva, ginseng y semillas naturales asiáticas, Antera combina la sabiduría de la medicina china y la ciencia dermatológica occidental para nutrir y restaurar tu cuero cabelludo.
            </p>
            <div className="flex justify-center items-center mt-6">            
            <Image
                src='/images/header.jpeg'
                alt="Picture of the author"
                width={400} 
                height={400} 
            //blurDataURL="data:..." automatically provided
            //placeholder="blur" // Optional blur-up while loading
            />
            </div>
            
        </header>
    );
};

export default Header;
