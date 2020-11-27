import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";

import colors from "../layouts/colors";
import Typography from "../Typography";

import { Link } from "gatsby";

import ipf_red from "../images/ipf_red.png";

type Props = {
  mode?: "light" | "dark";
};

const HeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);

  width: 100%;
  height: 7.2rem;

  ${Typography("body", 1.6, 400)};
  line-height: 2.5;
`;

const Logo = styled.img``;

const NavItems = styled.ul`
  display: flex;
  gap: 4rem;
  line-height: 72px;
`;

const LinkStyled = styled(Link)`
  :hover {
    color: #ef5030;
  }

  :focus {
    color: ${colors.primary};
  }
`;

function Navigation({ mode = "light" }: Props) {
  let color;
  if (mode === "dark") color = "white";

  const intl = useIntl();
  const locale = intl.locale !== "ko" ? `/${intl.locale}` : "";

  return (
    <HeaderComponent>
      <Link to={locale === "" ? "/" : locale}>
        <Logo src={ipf_red} alt="logo" />
      </Link>

      <NavItems>
        <li>
          <LinkStyled
            style={{ color }}
            activeStyle={{ color: colors.primary }}
            to={locale + "/About/"}
          >
            About
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            style={{ color }}
            activeStyle={{ color: colors.primary }}
            to={locale + "/Product/"}
          >
            Product
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            style={{ color }}
            activeStyle={{ color: colors.primary }}
            to={locale + "/News/"}
          >
            News
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            style={{ color }}
            activeStyle={{ color: colors.primary }}
            to={locale + "/Career/"}
          >
            Career
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            style={{ color }}
            activeStyle={{ color: colors.primary }}
            to={locale + "/Contact/"}
          >
            Contact
          </LinkStyled>
        </li>
      </NavItems>
    </HeaderComponent>
  );
}

export default Navigation;
