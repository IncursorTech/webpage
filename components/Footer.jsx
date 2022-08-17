import CustomContainer from 'components/CustomContainer';
import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import { media } from 'utils/media';
const footerItems = [
    {
        title: 'Company',
        items: [
            { title: 'Privacy Policy', href: '/privacy-policy' },
            { title: 'Cookies Policy', href: '/cookies-policy' },
        ],
    },
    {
        title: 'Product',
        items: [
            { title: 'Features', href: '/features' },
            { title: 'Something', href: '/something' },
            { title: 'Something else', href: '/something-else' },
            { title: 'And something else', href: '/and-something-else' },
        ],
    },
    {
        title: 'Knowledge',
        items: [
            { title: 'Blog', href: '/blog' },
            { title: 'Contact', href: '/contact' },
            { title: 'FAQ', href: '/faq' },
            { title: 'Help Center', href: '/help-center' },
        ],
    },
    {
        title: 'Something',
        items: [
            { title: 'Features2', href: '/features2' },
            { title: 'Something2', href: '/something2' },
            { title: 'Something else2', href: '/something-else2' },
            { title: 'And something else2', href: '/and-something-else2' },
        ],
    },
];
export default function Footer() {
    return (<FooterWrapper>
      <CustomContainer>
        <ListContainer>
          {footerItems.map((singleItem) => (<FooterList key={singleItem.title} {...singleItem}/>))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://www.twitter.com/health-in-turkey" passHref>
              <a>
                <TwitterIcon size={50} round={true}/>
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/health-in-turkey" passHref>
              <a>
                <FacebookIcon size={50} round={true}/>
              </a>
            </NextLink>

            <NextLink href="https://www.linkedin.com/health-in-turkey" passHref>
              <a>
                <LinkedinIcon size={50} round={true}/>
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2022 Health In Turkey</Copyright>
        </BottomBar>
      </CustomContainer>
    </FooterWrapper>);
}
function FooterList({ title, items }) {
    return (<ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (<ListItem key={singleItem.href} {...singleItem}/>))}
    </ListWrapper>);
}
function ListItem({ title, href }) {
    return (<ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>);
}
const FooterWrapper = styled.div `
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: rgb(14, 146, 215);
  background: linear-gradient(180deg, rgba(14, 146, 215, 1) 0%, rgba(34, 80, 164, 1) 100%);
  color: rgb(var(--textSecondary));
`;
const ListContainer = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ListHeader = styled.p `
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;
const ListWrapper = styled.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;
const ListItemWrapper = styled.p `
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;
const ShareBar = styled.div `
  display: contents;
`;
const Copyright = styled.p `
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;
const BottomBar = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
