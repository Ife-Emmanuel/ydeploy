import React from 'react';
import { Container, Wrapper, Row, Column, Link, Title, Brand, Text, Copywright} from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

// This is additional styling/modification to the prepared styled.div installed for online footer template
Footer.Brand = function FooterBrand({ children, ...restProps }) {
  return <Brand {...restProps}>{children}</Brand>;
};

Footer.Copywright = function FooterCopywright({ children, ...restProps }) {
  return <Copywright {...restProps}>{children}</Copywright>;
};


Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
