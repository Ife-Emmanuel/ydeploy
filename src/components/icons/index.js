import React from 'react'
import { Container, Home, Trash, Wrapper, Column, Row, Link, Brand, IconA} from './styles/icons'
import { FaFacebook, FaLinkedin, FaTrash, FaWindowClose, FaHome} from 'react-icons/fa';

export default function Icon({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
    }

// export function BrandIcon({ children, ...restProps }) {
//     return <BrandContainer {...restProps}>{children}</BrandContainer>;
//     }


Icon.Wrapper = function IconWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
  }

Icon.Column = function IconColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>;
  };

Icon.icon = function iconifself({ children, ...restProps }) {
    return <IconA {...restProps}>{children}</IconA>;
  };

Icon.Row = function IconRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>;
  };


Icon.Link = function IconLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
  };

Icon.Brand = function NavBrand({ children, ...restProps }) {
    return <Brand {...restProps}>{children}</Brand>;
  };





//   Icon components
Icon.Provider = function IconProvider({children, ...restProps}) {
    return(<Icon>
                <Icon.Wrapper {...restProps}>
                    <Icon.Link {...restProps}>
                        <Icon.Column {...restProps}>
                            {children}
                        </Icon.Column>
                    </Icon.Link>
                    
                </Icon.Wrapper>
            </Icon>)
}

Icon.BrandProvider = function IconBrand({children, ...restProps}) {
    return(<Icon>
                <Icon.Wrapper {...restProps}>
                    <Icon.Brand {...restProps}>
                        <Icon.Column {...restProps}>
                            {children}
                        </Icon.Column>
                    </Icon.Brand>
                    
                </Icon.Wrapper>
            </Icon>)
}




Icon.Facebook = function FacebookIcon({children, ...restProps}) {
return <FaFacebook/>
}

Icon.LinkedIn = function LinkedIcon({ children, ...restProps }) {
return <FaLinkedin/>;
};

Icon.Trash = function TrashIcon({ children, ...restProps }) {
return <Trash>
            <FaTrash/>
        </Trash>;
};

Icon.Home = function HomeIcon({ children, ...restProps }) {
return <Home {...restProps}>
    <FaHome/>
    {children}
    </Home>;
};


// Icon.Wrapper = function IconWrapper({children, ...restProps}) {
//     return <Wrapper {...restProps}>{children}</Wrapper>
//   }



Icon.WindowClose = function WindowCloseIcon({ children, ...restProps }) {
    return <FaWindowClose/>;
    };



